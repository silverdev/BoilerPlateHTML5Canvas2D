
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
    grid = negitive_ones([MAPWIDTH, MAPHEIGHT + 1]) // extra row for base case.
    for (var i = 1, i < MAPWIDTH; i++){
        grid[i][MAPHEIGHT] = 11;
    }

    return grid;
}

function Grid()
{
    this.g = setup_grid();
    this.top_row = getRandomArray(MAPWIDTH);
}

Grid.prototype.render = function()
{

}

Grid.prototype.update = function()
{

}
