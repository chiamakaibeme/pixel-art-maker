// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

	const gridHeight = $('#inputHeight').val();
	const gridWidth = $('#inputWidth').val();

	$('#pixelCanvas').empty();

	//creates each row of the table grid using for loop
	for(var i = 1; i <= gridHeight; i++) {

		$('#pixelCanvas').append("<tr></tr>");
	};

	//adds columns to each row created above using while loop
	var j = 1;
	while(j <= gridWidth) {

		$('tr').append("<td></td>");

		j++;
	}

}

$(document).ready(function () {
	$('#sizePicker').submit(function (evt) {

		evt.preventDefault();

		makeGrid(); //creates grid declared above when sizes are submitted

		$('td').click(function (evt) {


			const gridColor = $('#colorPicker').val();
			const target = $(evt.target); //selects 'td' created dynamically


			if(target.css('background-color') === "rgba(0, 0, 0, 0)") {

				target.css('background-color', gridColor);
			}
			else {

				target.css("background-color", "");
			}

		});

	});
});



