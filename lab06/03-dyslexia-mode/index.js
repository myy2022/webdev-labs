/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

document.querySelector("#dyslexia-toggle").addEventListener('click',() => {
  document.querySelector('body').classList.toggle('dyslexia-mode')
})