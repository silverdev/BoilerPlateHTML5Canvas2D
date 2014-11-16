
var MAPHEIGHT = 20
var MAPWIDTH = 35

function render_empty_cell()
{

}

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
    for(x = 0; x < this.width; x++)
    {
        for(y = 0; y < this.height; y++)
        {
            render_empty_cell(x, y);
        }
    }
}

function game_over(grid){
 for (var i = 0; i < MAPWIDTH; i++){
     if(grid[0][i] != -1){
         return true
         }
     }
    return false
}

function merge_tiles(grid){
  var change = false;
  for(var h = 0; h < MAPHEIGHT; h++)
    {
        for(var w = 0; w < MAPWIDTH; w++)
        {
            // if I have a tile and it can merge merge it.
            if (grid[w][h] != -1 && grid[w][h+1] != -1 && grid[w][h] >= grid[w][h+1]){
                change = true;
                grid[w][h+1] = (grid[w][h] + grid[w][h+1]) % 10
                grid[w][h] = -1
            }

        }

    }
  return change
}

function can_tile_drop(w,h, grid){

    //if the space is empty ignore it!
    if(grid[w][h] == -1){
        return false
    }

    //the spot bellow the piece is clear
    if(grid[w][h+1] == -1)
    {
        // make sue the piece on the right side can't hold it up
        if (w+1 == MAPWIDTH || grid[w][h+1] == -1 ||  grid[w+1][h+1] == -1){
            // make sue the piece on the left side can't hold it up
            if (w-1 == 0 || grid[w][h+1] == -1 ||  grid[w-1][h+1] == -1){
                return true;
            }
        }
    }
    return false;
}

// returns false if nothing changes
function drop_tiles(grid){
    var change = false;

    for(var h = 0; h < MAPHEIGHT; h++)
    {
        for(var w = 0; w < MAPWIDTH; w++)
        {
            if (can_tile_drop(w, h, grid)){
                change = true;
                grid[w][h+1] = grid[w][h]
                grid[w][h] = -1
            }

        }

    }

    return change
}

// returns false if the game state can't be updataed because the game is over.
Grid.prototype.update = function()
{

    this.g[3][3] = 1;
    console.log("turn")
    var new_grid = this.g.map(function (a, _) {return a.slice()})
    while(drop_tiles(new_grid) && merge_tiles(new_grid))
    {
        console.log("drop and merge")
    }

    this.g = new_grid;

    this.makeBlocks();

    if (game_over(this.g)){
        return false;
    }

    return true;
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
                // if(i < this.blocks.length - 1)
                // {
                //     new_blocks.push(this.blocks[i].remake(x, y, this.g[x][y]));
                // }
                // else
                // {
                    new_blocks.push(new Block(x, y, this.g[x][y]));
                // }
                i++;
            }
        }
    }
    this.blocks = new_blocks;
    this.num_blocks = this.blocks.length;
}
