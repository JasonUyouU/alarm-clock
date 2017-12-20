function workingClock() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var amPm = "AM";
  //Converting military time into regular time
  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  } else if (hour == 12) {
    amPm = "PM";
  }
  //adding zeroes when minute and second are single digits
  if (minute < 10) {
    minute = "0" + minute
  }
  if (second < 10) {
    second = "0" + second
  }
  //output the current time into the 'display' div
  document.getElementById('display').innerHTML = "<h1>" + hour + " : " + minute + " : " + second + " " + amPm + "</h1>";
  //refresh the time every second
  setTimeout(function(){
    workingClock()
  }, 1000)
  //alarm goes off when all of the below conditions are met
  if (setHour == hour && setMinute == minute && setSecond == second && amPm == setAmpm) {
    $("#clock").addClass("animation");
    document.getElementById('sound').loop = true
    document.getElementById('sound').play()
  }
}
//event listener to initiate the working clock
document.getElementById('display').addEventListener('onload', workingClock(), false);
//setting the alarm and storing into global variables for comparison
var setHour, setMinute, setSecond, setAmpm
function alarmSet() {
  setHour = document.getElementById('alarmHour').value;
  setMinute = document.getElementById('alarmMinute').value;
  setSecond = document.getElementById('alarmSecond').value;
  setAmpm = document.getElementById('alarmAmpm').value;
  document.getElementById('setTime').className = "selected";
}
$('#alarmOff').click(function(){
  $('#setTime').removeClass("selected");
  $("#clock").removeClass("animation");
  $('#sound').each(function() {
    this.pause();
    this.currentTime = 0;
  })
})
