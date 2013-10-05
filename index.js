'use strict';

var execFile    = require('child_process').execFile;
var fs          = require('fs');
var webpBinPath = require('webp-bin').path;
var mime        = require('mime');
var md5         = require('MD5');
var path        = require('path');

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

module.exports = function(basePath) {

	return function webpMiddleware(req, res, next) {

		var mimeType = mime.lookup(req.originalUrl),
			binPath,
			imgPath;

		if(supportedMimes.indexOf(mimeType) !== -1 && req.headers.accept.indexOf('image/webp') !== -1) {

			binPath = path.join(__dirname, 'bin', 'webp', md5(req.originalUrl) + '.webp');
			imgPath = path.join(basePath, req.originalUrl);

			// try lookup cache for fast access
			if(_tempCache.indexOf(binPath) !== -1) {
				res.sendfile(binPath, function(err) {
					if(err) {
						_tempCache.splice(_tempCache.indexOf(), 1);
						webpMiddleware(req, res, next);
					}
				});
				return;
			}

			fs.exists(binPath, function(exists) {

				if(exists) {

					sendAndSave(res, binPath);

				} else {

					execFile(webpBinPath, (imgPath + ' -q 70 -o ' + binPath).split(/\s+/), function(err) {
						if(err) {
							console.error(err);
							next();
						}
						sendAndSave(res, binPath);
					});

				}

			});

		} else {

			next();

		}

	};

};