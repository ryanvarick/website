/*
 Javascript used for development
*/

var $ = require("jquery");
// var hashgrid = require("hashgrid");

$(document).ready(function() {
    // var grid = new hashgrid();

    // live reload
    $.getScript("//localhost:9091", function(){
        console.log("Live reload active.")
    });
});
