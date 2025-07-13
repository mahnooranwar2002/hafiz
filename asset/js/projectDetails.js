var nav_btn = document.getElementById("nav");
var nav = document.getElementsByClassName("navbar")[0];
var tl = gsap.timeline();
nav_btn.addEventListener("click", function (e) {
  e.stopPropagation(); 
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


tl.from(".project-sect #projectSec .right-wrapper",{
   duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out"
})
tl.from(".project-sect #projectSec .left-wrapper",{
   duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out"
})
tl.from("footer",{
    duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out"
})