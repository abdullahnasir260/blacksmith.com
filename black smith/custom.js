//AOS
AOS.init({duration:1000, once:true});
//menu toggle
function toggleMenu(){
    document.getElementById("navlinks").classList.toggle("active");
}

//typing effect

new Typed("#typing",{
  strings: ['AC and Refrigerator Services.','At Your Door Step.','24/7 Availability.'],typeSpeed:60, backSpeed:30, backDelay:1000, loop:true
});

//scroll event

window.onscroll = () => {
  const y = window.scrollY;
  document.getElementById("mainHeader")?.classList.toggle("fixed", y > 100);
  document.getElementById("backToTop").style.display = y > 300 ? "block" : "none";

}

//back to top button

document.getElementById("backToTop")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
