# WebP Express Middleware

Inspired by [this](http://cloudinary.com/blog/transparent_webp_format_cdn_delivery_based_on_visitors_browsers) post at [Cloudinary](http://cloudinary.com/), this middleware generates and delivers JPG-, PNG- and TIFF-images on the fly as WebP-images if the client supports that format.

WebP is a new image format from Google that provides lossless and lossy compression for images on the web. For more information you might wanna read the [officially documentation](https://developers.google.com/speed/webp/) or a great article at html5rocks.com about [image compression](http://www.html5rocks.com/en/tutorials/speed/img-compression/).

## Installation

```shell
npm install webp-middleware
```

## Usage
``` javascript
var http    = require('http');
var express = require('express');
var webp    = require('webp-middleware');

var app = express();

app.use(webp(__dirname + '/public', { ... }));
app.use(express.static(__dirname + '/public'));
```

It is important to insert the webp middleware before the express.static middleware.

First parameter is the path of the static files.

Second parameter is an optional options object.

You can also watch into the example folder for an example usage.

## Options
* ``cacheDir`` is the directory where the webp files are saved. Default is ``__dirname + '/../../webp-cache'``
* ``preset`` delegates to the ``-preset`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``quality`` delegates to the ``-q`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``alphaQuality`` delegates to the ``-alpha_q`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``method`` delegates to the ``-m`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``segments`` delegates to the ``-segments`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``bytes`` delegates to the ``-size`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``psnr`` delegates to the ``-psnr`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``size`` delegates to the ``-s`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be an object with ``width`` and ``height`` keys
* ``spatialNoiseShaping`` delegates to the ``-sns`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``filter`` delegates to the ``-f`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``strong`` delegates to the ``-strong`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``noStrong`` delegates to the ``-nostrong`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``partitionLimit`` delegates to the ``-partition_limit`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``pass`` delegates to the ``-pass`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``crop`` delegates to the ``-crop`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be an object with ``width``, ``height``, ``x`` and ``y`` keys
* ``resize`` delegates to the ``-resize`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be an object with ``width`` and ``height`` keys
* ``multiThreading`` delegates to the ``-mt`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``lowMemory`` delegates to the ``-low_memory`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``alphaMethod`` delegates to the ``-alpha_method`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``alphaCleanup`` delegates to the ``-alpha_cleanup`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``noAlpha`` delegates to the ``-noalpha`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``lossless`` delegates to the ``-lossless`` option at [webp-bin](https://npmjs.org/package/webp-bin). Should be a boolean value
* ``hint`` delegates to the ``-hint`` option at [webp-bin](https://npmjs.org/package/webp-bin)
* ``metadata`` delegates to the ``-metadata`` option at [webp-bin](https://npmjs.org/package/webp-bin)


## License ##

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).