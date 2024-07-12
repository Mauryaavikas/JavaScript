let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

function displayTime(){
  let date = new Date()

  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()

  let hhRotation = 30*hh +mm/2
  let mmRotation = 6*mm
  let ssRotation = 6*ss

  hour.style.transform = `rotate(${hhRotation}deg)`
  minute.style.transform = `rotate(${mmRotation}deg)`
  second.style.transform = `rotate(${ssRotation}deg)`

}

setInterval(displayTime,1000)