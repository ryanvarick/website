/*! Javascript for ryanvarick.com | v16.4.1 (April, 2015) | https://github.com/ryanvarick.com/website */

/**
 Automatically look for Retina assets
*/
var retina = require('../vendor/retinajs/dist/retina.js');
retina.Retina.init(window);

/**
 Stick the footer just above the fold
*/
var stickFooter = function() {

    // first reset previous class additions
    var footer = document.querySelector('footer');
    footer.className = '';

    var main = document.querySelector('main');
    var mainHeight = main.offsetTop + main.offsetHeight;
    var windowHeight = window.innerHeight;

    // if the window is large enough, stick the footer
    if(windowHeight > mainHeight) {
        footer.className += 'stick-to-fold';
        footer.style.top = (windowHeight - 10) + 'px';
    }
};

/**
 Dynamically draw borders for portfolio elements
*/
var drawBorders = function() {

    // get the portfolio items for consideration
    var items = document.querySelectorAll('ul.portfolio-container li');

    // helper function: does the given index have a neighbor to its right?
    var hasRightNeighbor = function(index) {
        var elementPos = items[index].offsetLeft;

        // as long as we're not at the last item, check the position of the next item
        if((index + 1) === items.length) return false;
        else return (items[index + 1].offsetLeft > elementPos);
    };

    // helper function: does the given index have a neighbor below it?
    var hasBottomNeighbor = function(index) {
        var elementPos = items[index].offsetTop;

        // check all the remaining items for a bottom neighbor
        var bottomNeighborFound = false;
        for(var i = index; i < items.length; i++) {
            bottomNeighborFound = (items[i].offsetTop > elementPos);
        }
        return bottomNeighborFound;
    };

    // loop through the items and draw borders as necessary
    for(var i = 0; i < items.length; i++) {

        // first reset previous border values (e.g. after orientation change)
        items[i].style.borderWidth = 0;

        // now check if it should have a right and/or bottom border
        if(hasRightNeighbor(i)) {
            items[i].style.borderRightWidth = '1px';
        }
        if(hasBottomNeighbor(i)) {
            items[i].style.borderBottomWidth = '1px';
        }
    } // end for

};

// look for the portfolio container
if(document.querySelector('ul.portfolio-container')) {

    // draw borders and then listen for events that might cause flexbox wrapping
    window.addEventListener('orientationchange', drawBorders);
    window.addEventListener('resize', drawBorders);
    drawBorders();

    // stick the footer and then listen for orientation changes on e.g. iPad
    window.addEventListener('orientationchange', stickFooter);
    window.addEventListener('resize', stickFooter);
    stickFooter();
}
