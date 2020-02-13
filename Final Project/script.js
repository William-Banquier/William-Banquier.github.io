//Only after whole page loads, the following script is executed
window.onload = function () {
  setTimeout( function () 
  {
    toBottom(); 
    document.body.style.opacity = "100";
  }, 100);
};

//Function defintion
function toBottom() 
{ 
  window.scrollTo(0, document.body.scrollHeight); 
}
