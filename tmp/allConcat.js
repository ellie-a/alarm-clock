var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  var currentMoment = moment().format('hh:mm:ss a');
  $('#time').text(currentMoment);
  var clock = function() {
    currentMoment = moment().format('hh:mm a');
    $('#time').text(currentMoment);
  };
  setInterval(clock, 1000);

  $('#set-alarm').submit(function(event){
    event.preventDefault();
    var inputAlarm = $('#alarm-time').val();
    console.log(inputAlarm);
    var newAlarm = new Alarm(inputAlarm);
    var compare = function(){
      if(newAlarm.compareTime() === true) {
        alert("Time's up!");
      }
    };
    setInterval(compare, 1000);
  });
});
