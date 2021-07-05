const numberGrid = document.querySelector('.number-grid')


for (let i = 0; i <= 100; i++) {
  let div = document.createElement('div')
  div.setAttribute('class', 'number')
  div.textContent = i
  if (isPrime(i)) {
    div.style.background = '#eb695b'
  } else if (i % 2 == 0) {
    div.style.background = '#5bbc7a'
  } else {
    div.style.background = '#f7dc5c'
  }
  numberGrid.appendChild(div)
}