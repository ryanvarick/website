/*! Javascript for ryanvarick.com | v16.1.0 (April, 2015) | https://github.com/ryanvarick.com/website */

var retina = require('../vendor/retinajs/dist/retina.js');
retina.Retina.init(window);


// look for the portfolio container
if(document.getElementsByClassName('portfolio-container')[0]) {

    var main = document.getElementsByTagName('main')[0];
    var mainHeight = main.offsetTop + main.offsetHeight;
    var windowHeight = window.innerHeight;

    // if the window is large enough, stick the footer just above the fold
    if(windowHeight > mainHeight) {
        var footer = document.getElementsByTagName('footer')[0];
        footer.className += ' stick-to-fold';
        footer.style.top = (windowHeight - 10) + 'px';
    }
}
