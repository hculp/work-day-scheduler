// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var saveBtn = $('.saveBtn');
  var currentDay = $('#currentDay');
  var timeBlock = $('.time-block')

  saveBtn.click(saveInput);

  function applyTimeClass() {
    var hour = dayjs().hour();

    timeBlock.each(function() {
      var currentTimeBlock = parseInt($(this).attr('id').replace(/[^\d]/g,''));
      if (currentTimeBlock > 12) {
        $(this).addClass('future');
      } else if ( 12 === currentTimeBlock) {
        $(this).addClass('present');
      } else {
        $(this).addClass('past');
      }
    })
  }
 
  function saveInput(event) {
    event.preventDefault();
    var time = $(this).siblings().text();
    var content = $(this).siblings('.description').val();
    localStorage.setItem(time,content);
  }


    $(".hour").each(function() {
        var currentTimeBlock = $(this).text();
        var currentStorage = localStorage.getItem(currentTimeBlock);
        if(currentStorage !== null) {
            $(this).siblings('.description').val(currentStorage);
        }
      });

  currentDay.text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
  applyTimeClass();
});
