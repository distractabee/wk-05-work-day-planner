$(function () {

  // add the current day and time to the top of the page under the header
  const renderDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(renderDate);

  // Applies the past, present, or future class to each time
  // block by comparing the id to the current hour.

  const currentTime = dayjs().hour();
  $(".time-block").each(function () {
    // splits the id at the hyphen and takes the first element after the hyphen as the hour
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

    // compares the current hour to the time box hour and applies the past, present or future class
    if (blockHour < currentTime) {
      $(this).addClass("past")
    } else if (blockHour === currentTime) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }  
  });

  // adds a listener for click events on the save button. This code uses
  // the id in the containing time-block as a key to save the user input in
  // local storage.
  
  $(".saveBtn").on("click", function () {
    // retrieve the id of the time block the button is inside and the user-submitted text
    const blockID = $(this).parent().attr("id");
    const calendarEventDesc = $(this).siblings(".description").val();

    // save the event description to local storage, tied to the id of the time block where it was entered
    localStorage.setItem(blockID, calendarEventDesc);
  });

  // gets any user input that was saved in localStorage and sets
  // the values of the corresponding text area elements.

  $(".time-block").each(function () {
    const blockID = $(this).attr("id");
    console.log(blockID);
    const rememberThis = localStorage.getItem(blockID);

    if (rememberThis) {
      $(this).children(".description").val(rememberThis);
    }
  });

});
