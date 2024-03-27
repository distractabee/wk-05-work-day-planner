// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

  // add the current day and time to the top of the page under the header
  const renderDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(renderDate);

  // Applies the past, present, or future class to each time
  // block by comparing the id to the current hour.

  const currentTime = dayjs().hour();
  $(".time-block").each(function () {
    //splits the id at the hyphen and takes the first element after the hyphen as the hour
    const blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentTime) {
      $(this).addClass("past")
    } else if (blockHour === currentTime) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }  
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
});
