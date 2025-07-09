var nav_btn = document.getElementById("nav");
var nav = document.getElementsByClassName("navbar")[0];
var tl = gsap.timeline();
nav_btn.addEventListener("click", function () {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
  nav_btn.classList.toggle("ri-close-line");
  nav_btn.classList.toggle("ri-menu-3-line");
});

tl.from("#header h2", {
  duration: 1,
  y: -100,
  stragger: 1,
  opacity: 0.5,
});
tl.from("#header .navbar ul li a", {
 duration: 1,
  y: -100,
  stragger: 1,
  opacity: 0,
});
tl.from("#header i", {
  duration: 1,
  y: -100,
 opacity: 0.5,
});
tl.from("#bannar .right-wrapper", {
  duration: 1,
  x: -200,
  opacity: 0,
  ease: "power2.out"
})
tl.from("#bannar .left-wrapper img", {
  duration: 1,
  x: 200,
  opacity: 0,
  ease: "power2.out"
})

tl.from("#myBtn",{
  duration: 1,
  y: 10,
  opacity: 1,
 
  yoyo: true,
  repeat: -1 // -1 means infinite repeat
})






//for typing effect
var typed = new Typed(".auto_typed",{
  strings:["Social Media Marketer","Website Designer","Youtube Growth Specialist"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
}
)
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
