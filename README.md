# template web ssc

Use the same source code to build a website and a native [ssc app](https://github.com/socketsupply/socket).

This uses [single-page application architecture](https://developer.mozilla.org/en-US/docs/Glossary/SPA) & client-side routing. Because [route-event](https://github.com/nichoth/route-event) listens for click events on the document.body, URL-based routing will work, even though the native application does not have URLs.

-------

## develop

### start a web server
```
npm start
```

### start an ssc project
```
npm run start-ssc
```

## build
`public` dir is for website, `dist` dir is for ssc app

### build for the web
```
npm run build-web
```

### build for ssc
First compile code to `dist`, then run `ssc build`, with `dist` as the value for `copy` in `socket.ini`.

```
npm run build-ssc
```

### build everything
```
npm run build
```


## note

We are using the `--bundle` flag with `esbuild` when building for `ssc` because trying to use an `importmap` in HTML results in this error:

```
TypeError: Module specifier, '@socketsupply/tonic' does not start with "/", "./", or "../". 
```

-------

Is there a way to check at runtime if this is running in ssc or browser? We are checking the pathname in `index.js`

```js
route: location.pathname.includes('Contents/Resources/index.html') ?
```
