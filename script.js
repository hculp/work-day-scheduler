// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var saveBtn = $('.saveBtn');
  var currentDay = $('#currentDay');
  var past = $('.past');
  var present = $('.present');
  var future = $('.future');
  var timeBlock = $('.time-block')

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  saveBtn.click(saveInput,applyTimeClass);
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function applyTimeClass() {
    var hour = dayjs().hour();

    timeBlock.each(function() {
      var currentTimeBlock = parseInt($(this).attr('id').replace(/[^\d]/g,''));
      console.log(hour);
      console.log(currentTimeBlock);
      if (currentTimeBlock > 13) {
        console.log(currentTimeBlock > 13)
        $(this).addClass('future');
      } else if ( 13 === currentTimeBlock) {
        console.log(13 === currentTimeBlock)
        $(this).addClass('present');
      } else {
        $(this).addClass('past');
      }
      console.log($(this));
    })
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function saveInput(event) {
    event.preventDefault();
    var time = $(this).siblings('.hour').text();
    var content = $(this).siblings('.description').val();
    localStorage.setItem(time,content);
  }
  // TODO: Add code to display the current date in the header of the page.
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
});

