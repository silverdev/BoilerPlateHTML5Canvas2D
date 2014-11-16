
var MAPHEIGHT = 20
var MAPWIDTH = 35

function getRandomArray(size)
{
    var array = [];
    for(i = 0; i < size; i++)
    {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

function negitive_ones(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        //recursively calls negative_ones with one less dimension and pushes it onto the array
        array.push(dimensions.length == 1 ? -1 : negitive_ones(dimensions.slice(1)));
    }

    return array;
}

function setup_grid(){
    var grid = negitive_ones([MAPWIDTH, MAPHEIGHT + 1]) // extra row for base case.
    for (var i = 1; i < MAPWIDTH; i++){
        grid[i][MAPHEIGHT] = 11;
    }

    return grid;
}

function Grid()
{
    this.g = setup_grid();
    this.width = MAPWIDTH;
    this.height = MAPHEIGHT;
    this.blocks = [];
    this.num_blocks = 0;
    this.top_row = getRandomArray(MAPWIDTH);
}

Grid.prototype.render = function()
{
    for (var i = 0; i < this.blocks.length; i++) {
        this.blocks[i].render();
    }
}

Grid.prototype.update = function()
{
    this.g[3][3] = 5;
    this.makeBlocks();
}

Grid.prototype.makeBlocks = function()
{
    var new_blocks = [];
    var i = 0;

    for(x = 0; x < this.width; x++)
    {
        for(y = 0; y < this.height; y++)
        {
            if(this.g[x][y] != -1)
            {
                if(i < this.blocks.length - 1)
                {
                    new_blocks.push(this.blocks[i].remake(x, y, this.g[x][y]));
                }
                else
                {
                    new_blocks.push(new Block(x, y, this.g[x][y]));
                }
                i++;
            }
        }
    }
    this.blocks = new_blocks;
    this.num_blocks = this.blocks.length;
}
