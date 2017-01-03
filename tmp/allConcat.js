var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  var currentMoment = moment();
  $('#time').text(currentMoment);
  $('#set-alarm').submit(function(event){
    event.preventDefault();
    var inputAlarm = $('#alarm-time').val();
    var newAlarm = new Alarm(inputAlarm, currentMoment);
    var Alarm.setAlarm();
    $('#result').text(alarmTime);

  });
});

//  $('#time').text(moment().format('H:mm')); 
