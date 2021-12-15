const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');


imgs.forEach(img => img.addEventListener('click', imgClick));

//change current image to src of clicked image
function imgClick(e){

    //Reset the opacity
    imgs.forEach(img => (img.style.opacity =1));
    current.src = e.target.src;
    
    //Add fade in class

    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds

    setTimeout(() => current.classList.remove('fade-in'),500);
    //change the opacity to opacity var

    e.target.style.opacity = opacity;
}

