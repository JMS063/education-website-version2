let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("photogallery");
    let dots = document.getElementsByClassName("slides");
    let captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatically cycle through slides every 3 seconds
window.onload = function() {
    showSlides(1);
    setInterval(function() { plusSlides(1); }, 5000);
}
