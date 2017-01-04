function Alarm(setTime) {
  this.setTime = new Date(moment().format('YYYY-MM-DD') + ' ' + setTime);
  this.setTime.setSeconds(0);
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
// Alarm.prototype.playAlarm = function(){
//
// };
exports.alarmModule = Alarm;
