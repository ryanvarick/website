/**
 Simple deployment script

 This script copies `pmwiki.tmpl` and `dist/` into a directory matching the
 version number from `package.json`. It symlinks `stable` to the newly created
 directory, which is what PmWiki looks for when it loads the skin. The script
 uses `rsync` to upload to the server, and assumes public key authentcation.
*/

'use strict';

// dependencies
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs-extra');

// read version number
var pkg = require('./package.json');
var version = 'v' + pkg.version;

// make directories
var tmpDir = path.join('.', 'tmp');
var skinDir = path.join(tmpDir, version);
fs.mkdirSync(tmpDir);
fs.mkdirSync(skinDir);

// symlink stable
var stableDir = path.join(tmpDir, 'stable');
fs.symlinkSync(version, stableDir);

// copy files
var files = [
    'pmwiki.tmpl',
    'dist'
];
files.forEach(function(file) {
    fs.copySync(file, path.join(skinDir, file));
});

// upload
var sources = skinDir + ' ' + stableDir;
var destination = 'ryanvarick.com:/home/rvarick/ryanvarick.com/site/pub/skins';
var rsync = 'rsync -av ' + sources + ' ' + destination;

console.log('Uploading ' + version + '...');
exec(rsync, function(error, stdout, stderr) {
    if(error) {
        console.error('Upload error:');
        console.error(stderr);
    }
    else {
        console.log(stdout);
    }

    // cleanup
    fs.remove(tmpDir);
});
