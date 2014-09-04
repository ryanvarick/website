/*
 App.js

 Javascripts for mah stuffs!
*/

$(document).ready(function() {

	// randomly shift the color?
	setInterval(function() {
	    var color = Please.make_color({base_color: "orangered"});
	    $("h1").css("color", color);
	}, 3000);
});
