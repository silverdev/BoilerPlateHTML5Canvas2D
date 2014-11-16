
var BLOCK_SIZE = 40;

function translate_via_grid(x, y)
{
	context.translate(x*BLOCK_SIZE, y*BLOCK_SIZE);
}

function Block(x, y, value)
{
	this.x = x;
	this.y = y;
	this.value = value;
}

Block.prototype.remake = function(x, y, value)
{
	this.x = x;
	this.y = y;
	this.value = value;
}

Block.prototype.render = function()
{
	context.save();
	translate_via_grid(this.x, this.y);

	switch(this.value)
	{
		case 0: 
			context.drawImage(ASSETS.images["0"], 0, 0);
			break;
		case 1: 
			context.drawImage(ASSETS.images["1"], 0, 0);
			break;
		case 2: 
			context.drawImage(ASSETS.images["2"], 0, 0);
			break;
		case 3: 
			context.drawImage(ASSETS.images["3"], 0, 0);
			break;
		case 4: 
			context.drawImage(ASSETS.images["4"], 0, 0);
			break;
		case 5: 
			context.drawImage(ASSETS.images["5"], 0, 0);
			break;
		case 6: 
			context.drawImage(ASSETS.images["6"], 0, 0);
			break;
		case 7: 
			context.drawImage(ASSETS.images["7"], 0, 0);
			break;
		case 8: 
			context.drawImage(ASSETS.images["8"], 0, 0);
			break;
		case 9: 
			context.drawImage(ASSETS.images["9"], 0, 0);
			break;
		default: 
			context.drawImage(ASSETS.images["x"], 0, 0);
			break;
	}
	context.restore();
}