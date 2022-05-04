/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaulted = () => {
  document.querySelector('body').classList =[]
}
const desert = () => {
  document.querySelector('body').classList =[ "desert"]
  
}
const ocean = () => {
  document.querySelector('body').classList =[ "ocean"]
  
}
const highContrast = () => {
  
  document.querySelector('body').classList =[ "high-contrast"]
}


document.querySelector("#default").addEventListener('click', defaulted);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#high-contrast").addEventListener('click', highContrast);