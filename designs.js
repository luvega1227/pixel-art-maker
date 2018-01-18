var height, width, color, reset;

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  $("#pixel_canvas").html("");

  // height and width properties
  height = $("#input_height").val();
  width = $("#input_width").val();

  // if user enters certain value...
  if (height > 50 || width > 50 || height < 1 || width < 1) {

      // Display error
      if (!error.classList.contains('error')) {
        error.classList.toggle("error");
        error.innerText = "the dimension has to be smaller than 50 and bigger than 0";
              backUp();
      }
    } else {

      // Display x value on pixel_canvas
      error.innerText = "";
      $("div").removeClass('error');
      for (var x = 0; x < height; x++) {
        $('#pixel_canvas').append('<tr></tr>');
      }

      // Display y value on pixel_canvas
      for (var y = 0; y < width; y++) {
        $('#pixel_canvas tr').each(function() {
            $(this).append('<td></td>');
        });
    }
  }
}

// connects to colorPicker
color = $('#colorPicker');

// user clicks mouse down, connects to 'tr td' ids...
$(document).on("mousedown", "tr td", function() {
    var colorValue = color.val();

    // color is picked...
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function() {
      var colorValue = color.val();
      $(this).css('background-color', colorValue);
    }).mouseup(function() {
      $('td').unbind('mousemove');
    });
  $('tr td').on('dblclick', function() {
    $(this).css('background-color', "#FFFFFF")
  })
});

// resets pixel_canvas
reset = $("#pixel_canvas").html();
function backUp() {
  $("#pixel_canvas").html(reset);
}
