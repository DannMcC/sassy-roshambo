import 'file!./index.html'
import './styles/screen.sass'

const images = {
  rock: require('./images/rock.svg'),
  paper: require('./images/paper.svg'),
  scissors: require('./images/scissors.svg'),
  unknown: require('./images/unknown.svg')
}

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const memory = { lastMove: '', lastWin: false }

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = images[player]
  $('figure.computer img').src = images[computer]

  console.log('player variable is ', player)
  console.log('computer variable is ', computer)

  if (player === 'rock') {
    if (computer === 'scissors') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player win'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer lose'
      }, 2000)
      memory.lastWin = true
    }
    if (computer === 'paper') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player lose'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer win'
      }, 2000)
      memory.lastWin = false
    }
    if (computer === 'rock') {
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        memory.lastWin = null
        $('figure.computer img').src = images[computer]
        $('figure.player').className = 'player draw'
        $('figure.computer').className = 'computer draw'
      }, 1500)
      // Its a tie, do nothing
    }
  }
  if (player === 'paper') {
    if (computer === 'rock') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player win'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer lose'
      }, 2000)
      memory.lastWin = true
    }
    if (computer === 'scissors') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player lose'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer win'
      }, 2000)
      memory.lastWin = false
    }
    if (computer === 'paper') {
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        memory.lastWin = null
        $('figure.computer img').src = images[computer]
        $('figure.player').className = 'player draw'
        $('figure.computer').className = 'computer draw'
      }, 1500)
      // Its a tie, do nothing
    }
  }
  if (player === 'scissors') {
    if (computer === 'paper') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player win'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer lose'
      }, 2000)
      memory.lastWin = true
    }
    if (computer === 'rock') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        $('figure.player').className = 'player lose'
        $('figure.computer img').src = images[computer]
        $('figure.computer').className = 'computer win'
      }, 2000)
      memory.lastWin = false
    }
    if (computer === 'scissors') {
      $('figure.computer').className = 'computer think'
      $('figure.computer img').src = images.unknown
      setTimeout(() => {
        memory.lastWin = null
        $('figure.computer img').src = images[computer]
        $('figure.player').className = 'player draw'
        $('figure.computer').className = 'computer draw'
      }, 1500)
      // Its a tie, do nothing
    }
  }

  const playerScore = parseInt($('.scores .player').textContent)
  const computerScore = parseInt($('.scores .computer').textContent)

  if (playerScore === 2) {
    matchOver(true)
  }

  if (computerScore === 2) {
    matchOver(false)
  }
  // Check for best two out of three and call gameover if needed

// HINT: Check for win, lose or draw, then call `gameOver()` eventually.
  memory.lastMove = player
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  const computerRandomMove = moves[Math.floor(Math.random() * moves.length)]
  // const playerScore = parseInt($('.scores .player').textContent)
  // const computerScore = parseInt($('.scores .computer').textContent)
  // const pMatchScore = parseInt($('.matchScores .player').textContent)
  // const cMatchrScore = parseInt($('.matchScores .computer').textContent)
  memory.lastMove
  memory.lastWin

  if (memory.lastWin === true) {
    if (memory.lastMove === 'rock') {
      return 'paper'
    }
    if (memory.lastMove === 'paper') {
      return 'scissors'
    }
    if (memory.lastMove === 'scissors') {
      return 'rock'
    }
  }
  if (memory.lastWin === false) {
    if (memory.lastMove === 'rock') {
      return 'rock'
    }
    if (memory.lastMove === 'paper') {
      return 'paper'
    }
    if (memory.lastMove === 'scissors') {
      return 'scissors'
    }
  }
  return computerRandomMove
}

// HINT: Try calling `gameOver(true)` in the console.
const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    // $('.dialog h3').textContent = 'Round goes to human!'
    // $('.dialog button').textContent = 'Continue'
    $('.scores .computer').textContent = 0
    $('.scores .player').textContent = 0
    $('.matchScores .player').textContent = parseInt($('.matchScores .player').textContent) + 1
  } else {
    // $('.dialog h3').textContent = 'The Machine is the victor!'
    // $('.dialog button').textContent = 'Continue'
    $('.scores .computer').textContent = 0
    $('.scores .player').textContent = 0
    $('.matchScores .computer').textContent = parseInt($('.matchScores .computer').textContent) + 1
  }
  // $('body').className = 'modal'

  const playerScore = parseInt($('.matchScores .player').textContent)
  const computerScore = parseInt($('.matchScores .computer').textContent)

  if (playerScore === 2) {
    gameOver(true)
  }

  if (computerScore === 2) {
    gameOver(false)
  }
}
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
    $('.matchScores .computer').textContent = 0
    $('.matchScores .player').textContent = 0
  } else {
    ``
    $('.dialog h3').textContent = 'You lost!'
    $('.matchScores .computer').textContent = 0
    $('.matchScores .player').textContent = 0
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = images.unknown
  $('figure.computer img').src = images.unknown
  $('body').className = ''
  $('figure.player').className = 'player draw'
  $('figure.computer').className = 'computer draw'
}

const main = () => {
  $('figure.player img').src = images.unknown
  $('figure.computer img').src = images.unknown

  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.accept()
  module.hot.accept('file!./index.html', () => {
    window.location.reload()
  })
}
