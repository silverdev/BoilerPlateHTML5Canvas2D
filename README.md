BoilerPlateHTML5Canvas2D
========================

This is boilerplate code for making an HTML5 canvas2D browser game.

index.html loads all the javascript of the game. In order to add more files, add a line in the header of the HTML reading: 

<script type="text/javascript" src="*FILENAME*.js"></script>

Loader.js is a simple asynchronus loader. It can load .json files, .png images, and .mp3 audio elements.

To add a .json file, add the file to the /json/ folder and the add to assets.json:

{"name" : "*JSONFILENAME*", "type" : "json"},

Similarly to add images and audio elements, you can add them to the /images/ and /audio/ folders, and then add to assts.json:

{"name" : "*PNGFILENAME*", "type" : "image"},
{"name" : "*MP3FILENAME*", "type" : "audio"},

respectively. Make sure that you keep assets.json a valid json file.

