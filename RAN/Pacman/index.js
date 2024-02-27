document.addEventListener('DOMContentLoaded', function () {
  let square = document.querySelector('.red-square')
  square.style.top = '0px'
  square.style.left = '0px'
  let dot = document.querySelector('.yellow-dot')
  dot.style.top = '40px'
  dot.style.left = '40px'
  let scores = getHighestScore()
  updateScoreboard()

  let button = document.querySelector('.js-replay')
  button.addEventListener('click', function () {
    window.location.reload()
  })

  //Set point count
  let count = 0
  function updateScore() {
    let score = document.querySelector('.score')
    count++
    score.innerText = `Your score is ${count}`
  }
  let time = 30
  //Set timer
  setInterval(updateTimer, 1000)
  function updateTimer() {
    let timer = document.querySelector('.timer')
    time--
    if (time < 0) {
      return
    }
    timer.innerText = `Time left : ${time} seconds`
    if (time === 0) {
      square.style.display = 'none'
      dot.style.display = 'none'
      timer.innerText = `Time is over ! You made ${count} points, Well done! `
      //get rank
      updateRanking(count)
    }
  }

  //get ranking
  function updateRanking(count) {
    console.log('Entered updateRanking')
    console.log(scores)

    if (scores.length == 0) {
      console.log('empty array')
      let element = { points: count }
      scores.push(element)
      console.log(scores)
      updateLocalScores(scores)
      updateScoreboard()
      return
    }
    rankScore(scores)
    if (scores.length > 5) {
      scores.pop()
    }
    updateLocalScores(scores)
    updateScoreboard()
    // commencer par le bas du tableau et inserer le count a sa place et pop le dernier si besoin
  }
  function rankScore(scores) {
    let rank = 0
    scores.forEach((score) => {
      console.log(count)
      console.log(score.points)
      if (count > score.points) {
        console.log('adding new value')
        scores.splice(rank, 0, { points: count })
        rank++
        return
      } else {
        rank++
      }
    })
  }

  //getHighestScore
  function updateScoreboard() {
    let scoresDisplay = document.querySelector('.highest-scores')
    scoresDisplay.innerHTML = ''
    let scores = getHighestScore()
    scores.forEach((score) => {
      let highestScore = document.createElement('p')
      highestScore.innerText = score.points
      scoresDisplay.appendChild(highestScore)
    })
  }
  function getHighestScore() {
    //get scores in local storage
    let scores_json = localStorage.getItem('scores')
    let scores = JSON.parse(scores_json)
    console.log('The json from local storage is:')
    console.log(scores)
    // If the file is empty
    if (!scores) {
      // set to empty array
      scores = []
      // create local storage
      scores_json = JSON.stringify(scores)
      localStorage.setItem('scores', scores_json)
    }
    return scores
  }

  function updateLocalScores(scores) {
    let scores_json = JSON.stringify(scores)
    localStorage.setItem('scores', scores_json)
  }

  document.addEventListener('keydown', function moveCube(event) {
    let key = event.code
    regex = /(\d+)/
    let valueTop = square.style.top.match(regex)
    valueTop = valueTop[0]
    valueTop = parseInt(valueTop)
    let valueLeft = square.style.left.match(regex)
    valueLeft = valueLeft[0]
    valueLeft = parseInt(valueLeft)
    switch (key) {
      case 'ArrowUp':
        if (valueTop === 0) {
          break
        }
        square.style.top = `${valueTop - 40}px`
        break
      case 'ArrowDown':
        if (valueTop === 360) {
          break
        }
        square.style.top = `${valueTop + 40}px`
        break
      case 'ArrowLeft':
        if (valueLeft === 0) {
          break
        }
        square.style.left = `${valueLeft - 40}px`
        break
      case 'ArrowRight':
        if (valueLeft === 360) {
          break
        }
        square.style.left = `${valueLeft + 40}px`
        break
      default:
        console.log(`no arrowkey pressed`)
    }
    CheckIfDotIsEaten()
  })

  function CheckIfDotIsEaten() {
    console.log('Enter checkIfDotIsEaten')
    if (
      dot.style.top == square.style.top &&
      dot.style.left == square.style.left
    ) {
      generateNewDot()
      updateScore()
    } else {
      return
    }
  }
  function generateNewDot() {
    console.log('Enter generateNewDot')
    var newTop = Math.floor(Math.random() * 360) // get a number between 0 and 360
    let step = newTop % 40
    newTop -= step
    var newLeft = Math.floor(Math.random() * 360) // get a number between 0 and 360
    step = newLeft % 40
    newLeft -= step
    dot.style.top = `${newTop}px`
    dot.style.left = `${newLeft}px`
  }
})
