/*
 App.js

 Javascripts for mah stuffs!
*/

$(document).ready(function() {

	// randomly shift the color?
	setInterval(function() {
	    var welcome = Please.make_color({ base_color: "orangered" });
	    $("h1").css("color", welcome);

		var logo = Please.make_color();
		$("#svg-test path").css("fill", logo);
	}, 3000);
});
