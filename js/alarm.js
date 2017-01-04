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
