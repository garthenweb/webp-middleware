# WebP Express Middleware

Inspired by [a post from Cloudinary](http://cloudinary.com/blog/transparent_webp_format_cdn_delivery_based_on_visitors_browsers), this middleware generates and delivers JPG-, PNG- and TIFF-images on the fly as WebP-images if the requesting client supports that format.

WebP is a new image format from Google that provides lossless and lossy compression for images on the web. For more information please read the [official documentation](https://developers.google.com/speed/webp/) or the article on html5rocks.com about [image compression](http://www.html5rocks.com/en/tutorials/speed/img-compression/).

## Installation

``` bash
npm install webp-middleware
```

## Usage

``` javascript
var http = require('http');
var express = require('express');
var webp = require('webp-middleware');

var app = express();

app.use(webp(__dirname + '/public', { ... }));
app.use(express.static(__dirname + '/public'));
```

It is important to insert the webp middleware before the express.static middleware.

First parameter is the path of the static folder.

Second parameter is an optional options object.

You can also have a look into the example folder for examples.

## Options

* ``cacheDir`` is the directory where the webp files are saved. Default is a folder webp-cache in the executing directory (``path.join(process.cwd(), 'webp-cache')``)
* ``preset`` delegates to the ``-preset`` option at [cwebp]
* ``quality`` delegates to the ``-q`` option at [cwebp]
* ``alphaQuality`` delegates to the ``-alpha_q`` option at [cwebp]
* ``method`` delegates to the ``-m`` option at [cwebp]
* ``segments`` delegates to the ``-segments`` option at [cwebp]
* ``bytes`` delegates to the ``-size`` option at [cwebp]
* ``psnr`` delegates to the ``-psnr`` option at [cwebp]
* ``size`` delegates to the ``-s`` option at [cwebp]. Should be an object with ``width`` and ``height`` keys
* ``spatialNoiseShaping`` delegates to the ``-sns`` option at [cwebp]
* ``filter`` delegates to the ``-f`` option at [cwebp]
* ``strong`` delegates to the ``-strong`` option at [cwebp]. Should be a boolean value
* ``noStrong`` delegates to the ``-nostrong`` option at [cwebp]. Should be a boolean value
* ``partitionLimit`` delegates to the ``-partition_limit`` option at [cwebp]
* ``pass`` delegates to the ``-pass`` option at [cwebp]
* ``crop`` delegates to the ``-crop`` option at [cwebp]. Should be an object with ``width``, ``height``, ``x`` and ``y`` keys
* ``resize`` delegates to the ``-resize`` option at [cwebp]. Should be an object with ``width`` and ``height`` keys
* ``multiThreading`` delegates to the ``-mt`` option at [cwebp]. Should be a boolean value
* ``lowMemory`` delegates to the ``-low_memory`` option at [cwebp]. Should be a boolean value
* ``alphaMethod`` delegates to the ``-alpha_method`` option at [cwebp]
* ``alphaCleanup`` delegates to the ``-alpha_cleanup`` option at [cwebp]. Should be a boolean value
* ``noAlpha`` delegates to the ``-noalpha`` option at [cwebp]. Should be a boolean value
* ``lossless`` delegates to the ``-lossless`` option at [cwebp]. Should be a boolean value
* ``hint`` delegates to the ``-hint`` option at [cwebp]
* ``metadata`` delegates to the ``-metadata`` option at [cwebp]


## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[cwebp]: https://developers.google.com/speed/webp/docs/cwebp