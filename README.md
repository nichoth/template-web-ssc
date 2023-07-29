# template web ssc

Build a website and a native [ssc app](https://github.com/socketsupply/socket) from the same source code.

Because [route-event](https://github.com/nichoth/route-event) listens for click events on the document.body, URL-based routing works, even though the native application does not have URLs.

-------


## build

`public` dir is for website, `dist` dir is for ssc app

First compile code to `dist`, then run `ssc build`, with `dist` as the value for `copy`.
