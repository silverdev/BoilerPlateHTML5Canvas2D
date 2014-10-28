BoilerPlateHTML5Canvas2D
========================

This is boilerplate code for making an HTML5 canvas2D browser game.

index.html loads all the javascript of the game. In order to add more files, add a line in the header of the HTML reading: 

<script type="text/javascript" src="*FILENAME*.js"></script>

Loader.js is a simple asynchronus loader. It can load .json files, .png images, and .mp3 audio elements.

To add a .json file, add the file to the /json/ folder and the add to assets.json:

{"name" : "*JSONFILENAME*", "type" : "json"},

The json will be added as a global object under ASSETS.json.*JSONFILENAME*.*JSONCONTENTS* .

Similarly to add images and audio elements, you can add them to the /images/ and /audio/ folders, and then add to assets.json:

{"name" : "*PNGFILENAME*", "type" : "image"},

{"name" : "*MP3FILENAME*", "type" : "audio"},

respectively. These assets will be added as audio and image elements under ASSETS.images.*PNGFILENAME* and ASSETS.audio.*MP3FILENAME* . Make sure that you keep assets.json a valid json file.

If you want to add mouse or keyboard controls, create functions to handle the input and register them to the input you want by adding event listeners in the init function. Add any other initialization code in the init function.

The update function is executed every frame. Add any game logic there.
The render function is also executed every frame. Render everything you want to see there.


