/**
 Javascript for ryanvarick.com, v16.0.0 (April, 2015)
  - Readable version at https://www.ryanvarick.com/site/pub/skins/production/assets/js/app.js
  - More info at https://github.com/ryanvarick/website
*/

/*
<script src="vendor/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="vendor/hashgrid/hashgrid.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    // var grid = new hashgrid();
});
</script>
<script src="//localhost:9091"></script>
*/

// Typekit
//  - @via https://github.com/wired8/typekit-shim
//  - Inlined here because filename doesn't match module name
// var typekitId = 'ygu4ods';
// var el = document.createElement('script');
// el.src = '//use.typekit.net/' + typekitId + '.js';
// el.onload = function() {
//     Typekit.load();
//     // delete window.Typekit;
// };
// window.onload = function initTypekit() {
//     document.body.appendChild(el);
// }

console.log("Javascript initialized.");

// Retina.js
var retina = require('retinajs')
retina.Retina.init(window);
