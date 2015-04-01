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
* `npm run clean:packages` - Wipe out NPM and Bower junk
* `npm run clean:processes` - Kill processes (useful if the watch process dies)

### Notes

* Watch dies when switching branches (watched files and directories are temporarily removed), but I don't know how to fix

## Client Dependencies (TBD)

* [Font Awesome](https://github.com/FortAwesome/Font-Awesome) (subset)
* [Hashgrid](http://hashgrid.com) (replace with something that does not require jQuery)
* [Normalize.css](https://github.com/necolas/normalize.css)
* sanitize.css - TBD

## NPM Dependencies

All this junk is used during development or for building.

* "autoprefixer" - Automatically generate CSS vendor prefixes
* "browserify": - Modules for Javascript
* "clear": - Clear the screen (used by NPM scripts)
* [debowerify](https://github.com/eugeneware/debowerify) - Make `require('module')` work with the rat's nest that is Bower
* "http-server": Small static asset server (used for Live Reload)
* "less": CSS preprocessor
* "live-reload": Awesome
* "parallelshell": Flaky little tool to run multiple NPM scripts in parallel
* "versiony-cli": Sync `package.json` version to `bower.json`
* "watch": Watch filesystem for changes
