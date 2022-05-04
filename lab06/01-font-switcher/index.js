const makeBigger = () => {
  e = document.querySelector("body > div > div > p")
  size = parseInt(window.getComputedStyle(e).fontSize.split('px')[0])
  size += 5
  e.style.fontSize = size+"px"
};

const makeSmaller = () => {
  e = document.querySelector("body > div > div > p")
  size = parseInt(window.getComputedStyle(e).fontSize.split('px')[0])
  size -= 5
  e.style.fontSize = size + "px"
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
