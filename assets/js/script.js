// All the script code is wrapped in a jQuery function to ensure that all the DOM elements load before performing the script.
$(function () {
  var saveBtn = $('.saveBtn');
  var currentDay = $('#currentDay');
  var timeBlock = $('.time-block')

  // An event click for when the save button is pressed and the funnction saveInput is called.
  saveBtn.click(saveInput);

  // This function updates the class for a time slot compared to the current hour with either future, present, or pass.
  function applyTimeClass() {
    var hour = dayjs().hour();

    timeBlock.each(function() {
      var currentTimeBlock = parseInt($(this).attr('id').replace(/[^\d]/g,''));
      if (currentTimeBlock > hour) {
        $(this).addClass('future');
      } else if ( hour === currentTimeBlock) {
        $(this).addClass('present');
      } else {
        $(this).addClass('past');
      }
    })
  }
 
  // After the event clicker calls the saveInput function, then the time slot and text content is stored in local storage.
  function saveInput(event) {
    event.preventDefault();
    var time = $(this).siblings().text();
    var content = $(this).siblings('.description').val();
    localStorage.setItem(time,content);
  }

  // For ever hour time block, local storage is checked to see if there is saved information so that it persist after refresh and remains in the text field.
  $(".hour").each(function() {
      var currentTimeBlock = $(this).text();
      var currentStorage = localStorage.getItem(currentTimeBlock);
      if(currentStorage !== null) {
          $(this).siblings('.description').val(currentStorage);
      }
    });
  
  // Sets the display for the calendar date and tiem at the top of the page.
  currentDay.text(dayjs().format('dddd, MMMM D'));
  applyTimeClass();
});
