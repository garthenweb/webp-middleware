'use strict';

var execFile       = require('child_process').execFile;
var fs             = require('fs');
var webpBinPath    = require('webp-bin').path;
var mime           = require('mime');
var md5            = require('MD5');
var path           = require('path');
var mkdirp         = require('mkdirp');

var supportedMimes = [
	'image/jpeg',
	'image/png',
	'image/tiff'
];

var _tempCache = [];
var sendAndSave = function (res, path) {
	res.sendfile(path);
	_tempCache.push(path);
};

module.exports = function(basePath, options) {

	var cacheDir,
		optionArr,
		cachePathExists;

	// use custom dir or choose default
	cacheDir = options && options.cacheDir ? options.cacheDir : __dirname + '/../../webp-cache';

	// compute options in external file
	optionArr = require('./compute-options')(options);

	// create cache dir if not exists
	cachePathExists = fs.existsSync(path.join(cacheDir));
	if(!cachePathExists) {
		mkdirp.sync(path.join(cacheDir));
	}

	/**
	 * handles each request and sends a webp image format if the client supports it
	 */
	return function webpMiddleware(req, res, next) {

		var mimeType = mime.lookup(req.originalUrl),
			pathOptions = [],
			cachePath,
			imgPath;

		if(supportedMimes.indexOf(mimeType) !== -1 && req.headers.accept.indexOf('image/webp') !== -1) {

			cachePath = path.join(cacheDir, md5(req.originalUrl) + '.webp');
			imgPath = path.join(basePath, req.originalUrl);

			// try lookup cache for fast access
			if(_tempCache.indexOf(cachePath) !== -1) {
				res.sendfile(cachePath, function(err) {
					if(err) {
						_tempCache.splice(_tempCache.indexOf(cachePath), 1);
						webpMiddleware(req, res, next);
					}
				});
				return;
			}

			fs.exists(cachePath, function(exists) {

				if(exists) {

					sendAndSave(res, cachePath);

				} else {

					pathOptions.push(imgPath);
					pathOptions = pathOptions.concat(optionArr);
					pathOptions.push('-o');
					pathOptions.push(cachePath);

					execFile(webpBinPath, pathOptions, function(err) {
						if(err) {
							console.error(err);
							next();
							return;
						}
						sendAndSave(res, cachePath);
					});

				}

			});

		} else {

			next();

		}

	};

};