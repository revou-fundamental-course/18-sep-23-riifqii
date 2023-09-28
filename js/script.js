document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let Interest = document.forms['contact-form']['Interest'].value;
    
    if (!name) {
        document.getElementById("name-error").innerText = "name cannot be blank!"
    } else {
        document.getElementById("name-error").innerText = ""
    } 

    if (!email) {
        document.getElementById("email-error").innerText = "email cannot be blank!"
    } else {
        document.getElementById("email-error").innerText = ""
    }

    if (!Interest) {
        document.getElementById("Interest-error").innerText = "interest cannot be blank!"
    } else {
        document.getElementById("Interest-error").innerText = ""
    }
});

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add('active');
}

(function() {
    setInterval(nextSlide, interval);
})()