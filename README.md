# ryanvarick.com

v16.0.0

Sixteenth major revision since 1998. For this version, I moved my repository over to Github, automated deployment through `npm`, and manage my front end dependencies with `bower`.

## Installation

`npm install`
`npm run build`

## Scripts

* `npm run dev` &ndash; Starts the server, live reload, watcher, and opens browser windows
* `npm run build`
* TBD

`build` - Asset compilation. Generates `app.css` and `app.less`. Specific assets can be called.

`open` - Useful for opening applications. Requires Chrome and Firefox. My editor is Atom. Etc.

`livereload`, `serve`, and `watch` - Used for development.

`dev` - Start live reload on port 9001, serve off of port 9090, watch for changes, open some windows

## Dependencies

* Font Awesome (subset)
* Hashgrid (replace with something that does not require jQuery)
* Normalize.css
* Please.js
