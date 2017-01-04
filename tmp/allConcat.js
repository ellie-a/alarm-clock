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
    var audio = new Audio('../morning.mp3');

    var compare = function(){
      if(newAlarm.compareTime() === true) {
        audio.play();
      }
    };
    $('.snooze').click(function(){
      audio.pause();
      audio.currentTime = 0;
      setTimeOut(function(){ audio.play();} , 30000);
    });
    setInterval(compare, 10000);
  });
});
