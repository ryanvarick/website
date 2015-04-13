# ryanvarick.com

My website, [ryanvarick.com](https://www.ryanvarick.com), is currently powered by [PmWiki](http://www.pmwiki.org). This is its current skin, the 16th major version since 1998. Eventually I would like to migrate to a Markdown-based wiki like [Jingo](https://github.com/claudioc/jingo).

## Installation

Clone locally under `pub/skins/<version>`, then

    npm install

For local testing, create the latest version number (e.g `v16.0.0`) and symlink as `experimental`. To go live, change the symlink to `production` and push remotely. Installations should be configured to use the correct skin automatically.

## Usage

I dig `npm` scripts. The more I can do without Grunt or Gulp or whatever, the better.

* `npm run dev` - Run live reload, watch for changes, and start a static server
* `npm run dev:watch` - Like `npm run dev`, but without the server (useful when running a separate PHP server)
* `npm run deploy` - Deploy the current skin (uses `sync.pm`)

I don't really like dealing with Bower or NPM either, so here are a few utilities related to them:

* `npm run version` - Sync `package.json` version number to `bower.json`
* `npm run postinstall` - Automatically run `bower install` after `npm install`
* `npm run clean:packages` - Remove NPM/Bower junk
* `npm run clean:processes` - Kill processes, which is useful when watch dies (see note below)

### Notes

* Watch dies when switching branches because files are temporarily removed

## Bower Packages

* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) (subset)
* [Hashgrid](http://hashgrid.com) (replace with something that does not require jQuery)
* [sanitize.css](http://jonathantneal.github.io/sanitize.css/) - Browser reset
* [retina.js](http://imulus.github.io/retinajs/) - Automagically serve Retina assets

## NPM Packages

All this junk is used during development or for building.

* [Autoprefixer](https://github.com/postcss/autoprefixer) - Automatically generate CSS vendor prefixes
* [Browserify](https://github.com/substack/node-browserify) - Javascript modules
* [clear](https://github.com/bahamas10/node-clear): - Clear the screen (used by NPM scripts)
* [clean-css](https://github.com/jakubpawlowicz/clean-css) - CSS minifier
* [http-server](https://github.com/indexzero/http-server) - Simple static server (used with Live Reload)
* [less.js](https://github.com/less/less.js): CSS preprocessor
* [live-reload](https://github.com/Raynos/live-reload) - Live reloading
* [Parallel Shell](https://github.com/keithamus/parallelshell) - Flaky little tool to run multiple NPM scripts in parallel
* [UglifyJS](https://github.com/mishoo/UglifyJS2) - Javascript minifier
* [versiony-cli](https://github.com/radubrehar/versiony-cli) - Sync `package.json` version to `bower.json`
* [watch](https://github.com/mikeal/watch) - Watch filesystem for changes (used with Live Reload)
