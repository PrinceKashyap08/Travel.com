
const preloader = document.getElementById("loader");
function myFunction(){
    preloader.style.display = "none";
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 50000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});

const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 50)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
});


$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'center'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

window.addEventListener("scroll", () =>{
    const header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});