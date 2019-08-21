const chronometer = new Chronometer()
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
const minDec = document.getElementById('minDec')
const minUni = document.getElementById('minUni')
const secDec = document.getElementById('secDec')
const secUni = document.getElementById('secUni')
const milDec = document.getElementById('milDec')
const milUni = document.getElementById('milUni')
let minutesInterval
let secondsInterval

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minutesInterval = setInterval(() => {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  }, 60000)
}

function printSeconds() {
  secondsInterval = setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  }, 1000)
}

function printMilliseconds()


function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {
  minDec.innerHTML = '0'
  minUni.innerHTML = '0'
  secDec.innerHTML = '0'
  secUni.innerHTML = '0'
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP'
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')

    btnRight.innerHTML = 'SPLIT'
    btnRight.classList.remove('reset')
    btnRight.classList.add('split')

    chronometer.startClick()
    printTime()
  } else {
    btnLeft.innerHTML = 'START'
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')

    btnRight.innerHTML = 'RESET'
    btnRight.classList.remove('split')
    btnRight.classList.add('reset')

    clearInterval(secondsInterval)
    clearInterval(minutesInterval)

    chronometer.stopClick()
  }
})

// Reset/Split Button
btnRight.addEventListener('click', function() {
  const list = document.getElementById('splits')
  if (btnRight.innerHTML === 'RESET') {
    setResetBtn()
    list.innerHTML = ''
  } else {
    const item = document.createElement('li')
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    item.innerText = `${minutes}:${seconds}`
    list.appendChild(item)
  }
})

// btnRight.addEventListener('click', function() {
//   if (btnRight.innerHTML === 'RESET') {
//     btnRight.innerHTML = 'SPLIT'
//     btnRight.classList.add('split')
//     chronometer.resetClick()
//   } else {
//     btnRight.innerHTML = 'RESET'
//     btnRight.classList.remove('split')
//   }
// })
