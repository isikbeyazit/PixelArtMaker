// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const size = document.getElementById("#sizePicker");
const grid = $('#pixelCanvas');
let color = $('#colorPicker').val();
let mouseMove = document.onmousemove;
let mousedown = false;
let clicked = true;


//clear canvas
function clearGrid(){
  $('#pixelCanvas tr').remove();
}

//reset grid
function resetGrid(){
  grid.children().remove();
}

//drag color
function colorDrag(){
    
    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).attr('bgcolor', color);
        }
    })

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    })

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    })
}


function makeGrid() {
	//capture value in height input
	const height = $('#inputHeight').val();
	//capture value in width input
	const width = $('#inputWidth').val();
	//clear previous grid
	grid.children().remove();
	for (let r = 0; r < height; r++){
		let row = document.createElement('tr');
		grid.append(row);
	}
	for (let c = 0; c < width; c++){
		let cell = document.createElement('td');
		$('tr').append(cell);

	}
	return false;
}


// When size is submitted by the user, call makeGrid() & call colorDrag() if mouse is held down

$('#sizePicker').on('submit', function(e) {
    e.preventDefault();
    makeGrid();
    colorDrag();
 
})
//ADD COLOR TO PIXELS

//when empty cell is clicked on
grid.on('click', 'td', function(){
	let color = $('#colorPicker').val();

	if($(this).css('background-color') === 'rgba(0, 0, 0, 0)' ||
	$(this).css('background-color') === 'transparent'){
		$(this).css('background-color', color);
	} else {
		$(this).css('background-color', 'transparent');
	}
})

grid.on('mousemove mouseenter mouseleave mouseover', 'td', function(e){
	if(e.which === 1){
		let color = $('#colorPicker').val();
		$(this).css('background-color', color);
	}
})

	
//clear entire grid
$('#clear').on('click', function(){
  clearGrid();
  makeGrid();
})

//reset size of grid
$('#reset').on('click', function(){
	resetGrid();
})