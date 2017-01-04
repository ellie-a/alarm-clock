(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(setTime) {
  this.setTime = new Date(moment().format('YYYY-MM-DD') + ' ' + setTime);
  this.setTime.setSeconds(0);
}

Alarm.prototype.compareTime = function() {
  var alarmOn = false;

  console.log(moment().format('hh:mm:ss a'));
  if(moment().format('hh:mm:ss a') === moment(this.setTime).format('hh:mm:ss a'))
  {
    alarmOn = true;
  }
  return alarmOn;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  var currentMoment = moment().format('hh:mm:ss a');
  $('#time').text(currentMoment);
  var clock = function() {
    currentMoment = moment().format('hh:mm:ss a');
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
      setTimeOut(function(){audio.play();}, 6000);
    });
    setInterval(compare, 1000);
  });
});

//snooze doesnt refresh setTimeOut is not defined

},{"./../js/alarm.js":1}]},{},[2]);
