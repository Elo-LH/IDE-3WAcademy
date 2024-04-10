'use strict'

document.addEventListener('DOMContentLoaded', function () {
  function moveBallLeft() {
    let regex = /(\d+)/
    let ball = document.querySelector('#ball')
    let leftValue = ball.style.left.match(regex)

    leftValue = leftValue[0]
    console.log(leftValue)
    let newLeftValue = Number(leftValue) + 1
    console.log(newLeftValue)
    ball.style.left = newLeftValue + 'vw'
    if (newLeftValue === 95) {
      setTimeout(moveBallRight, 10)
    } else {
      setTimeout(moveBallLeft, 10)
    }
  }
  function moveBallRight() {
    let regex = /(\d+)/
    let ball = document.querySelector('#ball')
    let leftValue = ball.style.left.match(regex)

    leftValue = leftValue[0]
    console.log(leftValue)
    let newLeftValue = Number(leftValue) - 1
    console.log(newLeftValue)
    ball.style.left = newLeftValue + 'vw'
    if (newLeftValue === 0) {
      setTimeout(moveBallLeft, 10)
    } else {
      setTimeout(moveBallRight, 10)
    }
  }
  function moveBallDown() {
    let regex = /(\d+)/
    let ball = document.querySelector('#ball')
    let topValue = ball.style.top.match(regex)
    console.log(ball.style.top)
    topValue = topValue[0]
    let newTopValue = Number(topValue) + 1
    ball.style.top = newTopValue + 'vh'
    if (newTopValue === 97) {
      setTimeout(moveBallUp, 10)
    } else {
      setTimeout(moveBallDown, 10)
    }
  }
  function moveBallUp() {
    let regex = /(\d+)/
    let ball = document.querySelector('#ball')
    let topValue = ball.style.top.match(regex)

    topValue = topValue[0]
    let newTopValue = Number(topValue) - 1
    ball.style.top = newTopValue + 'vh'
    if (newTopValue === 0) {
      setTimeout(moveBallDown, 10)
    } else {
      setTimeout(moveBallUp, 10)
    }
  }

  function moveBall() {
    moveBallLeft()
    moveBallDown()
  }
  moveBall()
})
