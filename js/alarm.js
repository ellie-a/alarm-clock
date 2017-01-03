function Alarm(setTime, currentTime) {
  this.setTime = new Date(moment().format('YYYY-MM-DD') + ' ' + setTime);
  this.currentTime = currentTime;
}

Alarm.prototype.compareTime = function() {
  var alarmOn = false;

  console.log(moment(this.setTime).format('hh:mm a'));
  if(moment().format('hh:mm a') === moment(this.setTime).format('hh:mm a'))
  {
    alarmOn = true;
  }
  return alarmOn;
};
exports.alarmModule = Alarm;
