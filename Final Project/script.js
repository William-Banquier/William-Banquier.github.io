//Only after whole page loads, the following script is executed
window.onload = function () {
  setTimeout(function () {
    toBottom();
    document.body.style.opacity = "100";
  }, 100);
};

//Send to bottem
function toBottom() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(scrollAppear, 3000);


}


//Creat Scroll Up text
function scrollAppear(element) {
  element = document.getElementById("scroll_up")

  var op = 0.11; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' - op * 100 + ")";
    op += op * 0.1;
  }, 50);
}
