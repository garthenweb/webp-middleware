# API

``` javascript
const webp = require('webp-middleware');

webp.express(directory, {
    cache: webp.createFileSystemCache(path.join(__dirname, '/webp-cache'), {
        computeKey(filename, buffer, cb) {
            ...
        }
    }),
    cwebp: {
        preset: ...,
        quality: ...,
        strong: false,
    },
});
```

# Todos

* Write abstract cache
    - Add option to replace default cache
    - Add customizable cache key generator
* Write tests
    - webp supported
    - webp not supported
    - express 3
    - express 4
    - option parser
* Improve option parser
    - accept string and object
* Support koa and hapi fileserver