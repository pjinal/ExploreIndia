/*              Start JS code of weater.html                 */

var dom = document.getElementsByClassName("btn-accordion");             //get details of btn element
var i;

for (i = 0; i < dom.length; i++) {                                      //loop for getting all elements
  dom[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;                                //get all sibling elements
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";                //show content of FAQs
    } 
  });
}

/*              End JS code of weater.html                   */