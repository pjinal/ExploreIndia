
// scrolling animation
window.onload = function() {
    let effect = document.querySelector("#effect");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if(window.scrollY >= 400) {
            effect.style.opacity = '1';
            effect.style.transform = 'tranlateX(0px)';
            effect.style.transition = '1s ease-in-out';
        }
        else {
            effect.style.opacity = '0';
            effect.style.transform = 'tranlateX(-30px)';
            
        }
    }
    scrollEffect();
}


let imageArray1 = ["images/Chadar-trek.jpg","images/chadder-1.cms","images/chadder-2.webp","images/chadder\ -3.jpg"]
let imageArray2 = ["images/leh\ -8.jpg","images/leh\ -5.jpg","images/leh\ -6.jpg","images/LEH.jpg"]
 
//automatic slideshow of images
 let imageCount = 0;

 let diffChader = imageArray1.length -1;
 let diffLeh = imageArray2.length -1;


 let delay = 2000; 

 let a = 1


 setInterval("imageSlideShow(-1)", delay);

 function imageSlideShow(direction)
 {
     
    imageCount = imageCount + direction;

     if(imageCount > diffChader || imageCount > diffLeh )
     {
        imageCount = 0;
     }

     if(imageCount < 0)
     {
        imageCount = diffChader;
        imageCount = diffLeh;
     }

     document.getElementById('slideshowchader').src = imageArray1[imageCount];
     document.getElementById('slideshowleh').src = imageArray2[imageCount];
    
     
 }