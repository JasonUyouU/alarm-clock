function workingClock() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var amPm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  }
  if (minute < 10) {
    minute = "0" + minute
  }
  if (second < 10) {
    second = "0" + second
  }
  document.getElementById('display').innerHTML = "<h1>" + hour + " : " + minute + " : " + second + " " + amPm + "</h1>";
  setTimeout(function(){
    workingClock()
  }, 1000)

  if (setHour == hour && setMinute == minute && setSecond == second) {
    alert("wake up")
  }
}

document.getElementById('display').addEventListener('onload', workingClock(), false);

var tod = new Date();
var hor = tod.getHours();
var min = tod.getMinutes();
var sec = tod.getSeconds();
var setHour, setMinute, setSecond
function alarmSet() {
  setHour = document.getElementById('alarmHour').value;
  setMinute = document.getElementById('alarmMinute').value;
  setSecond = document.getElementById('alarmSecond').value;
}
