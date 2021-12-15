



$("#submitForm").click(function() {
    alert("The Form has been Submitted.");
 });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function validate()
            {
                var uname = document.getElementById("uname").value;
                var Email = document.getElementById("Email").value;
                var password = document.getElementById("password").value;
                var pattern = document.getElementById("pattern").value;
                var patcheck = new RegExp("^[a-z0-9]");
                if(uname==="")
                {
                    document.getElementById("div1").innerHTML="Enter a value";
                    document.getElementById("div1").style.color="Red";
                    
                }
                else
                {
                    document.getElementById("div1").innerHTML="";
                }
                if(Email.indexOf("@")> -1)
                {
                    document.getElementById("div2").innerHTML="";
                }
                 else
                {
                    document.getElementById("div2").innerHTML="Enter the correct email address";
                    document.getElementById("div2").style.color="Red";
                    
                }
                if(password.length<=6)
                {
                    document.getElementById("div3").innerHTML="Password is weak";
                    document.getElementById("div3").style.color="Red";
                }
                 else
                {
                    document.getElementById("div3").innerHTML="";
                }
                
                if(!patcheck.test(pattern))
                {
                    document.getElementById("div4").innerHTML="Only Alphabets/Numbers";
                    document.getElementById("div4").style.color="Red";
                }
                else
                {
                    document.getElementById("div4").innerHTML="";
                }
            }