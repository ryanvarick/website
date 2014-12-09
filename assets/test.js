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

		var bg = Please.make_color();
		$("body").css("background-color", bg);
	}, 3000);




		var $definitions = $("div#about2 ul").children();
		var index = -1;

		var $dtdt = $("<span>").addClass("dtdt").prependTo("div#about2 span");
		$dtdt.after(" ");

		function loop() {
			index = (index + 1) % ($definitions.length - 1);
			var $definition = $($definitions[index]);

			$dtdt
				.text($definition.text())
				.fadeIn(500)
				.delay(5000)
				.fadeOut(200, loop);
		};

		loop();
		// setInterval(loop, 3000);

});
