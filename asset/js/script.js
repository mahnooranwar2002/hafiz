var nav_btn = document.getElementById("nav");
var nav = document.getElementsByClassName("navbar")[0];
var tl = gsap.timeline();
nav_btn.addEventListener("click", function (e) {
  e.stopPropagation(); // Yeh prevent karta hai ki event parent elements tak bubble na kare
  nav.style.display = nav.style.display === "block" ? "none" : "block";
  nav_btn.classList.toggle("ri-close-line");
  nav_btn.classList.toggle("ri-menu-3-line");
});

document.addEventListener("click", function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    nav_btn.classList.remove("ri-close-line");
    nav_btn.classList.add("ri-menu-3-line");
  }
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
  y: -200,
  opacity: 0,
  ease: "power2.out"
})
tl.from("#bannar .left-wrapper img", {
  duration: 1,
  y: 200,
  opacity: 0,
  ease: "power2.out"
})

tl.from("#aboutSec .right-wrapper",{
  duration: 1,
  y: -200,
  opacity: 0,
  ease: "power2.out"
})
tl.from("#aboutSec .left-wrapper",{
  duration: 1,
  y: 200,
  opacity: 0,
  ease: "power2.out"
})


tl.from(".serviceSec .heading",{
  duration: 1,
  y: -200,
  opacity: 0,
  ease: "power2.out"
})
tl.from(".serviceSec .cards-section",{
   y: 600,
  opacity: 0,
  duration:2.5,
 ease: "expoScale(0.5,7,none)",

})

tl.from("#reviewSection .heading",{
  duration: 1,
  y: -200,
  opacity: 0,
  ease: "power2.out"
})
tl.from("#reviewSection .swiper",{
    y: 200,
  opacity: 0,
  duration:2.5,
 ease: "expoScale(0.5,7,none)",
})


tl.from("#contactSec .right-wrapper",{
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out"
})
tl.from("#contactSec .left-wrapper",{
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out"
})

tl.from("#myBtn",{
  duration: 1,
  y: 10,
  opacity: 1,
  yoyo: true,
  repeat: -1
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
