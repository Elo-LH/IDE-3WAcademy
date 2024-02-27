document.addEventListener('DOMContentLoaded', function () {
  let numberDisplay = document.querySelector('.js-number-display')
  let numberInput = document.querySelector('.js-number-input')
  numberDisplay.innerText = numberInput.value
  numberInput.addEventListener('change', function () {
    numberDisplay.innerText = numberInput.value
  })
})
