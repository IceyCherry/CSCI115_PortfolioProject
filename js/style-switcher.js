// Kelvin Hua
// 656578887
// Elements used for switching the color between the CSS color-1 to color-5.
// References to the links are in index.html.
// Style switcher is found at the top right of the page (brush and lightbulb icons).

/*======================= Toggle Style Switcher ======================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open"); /* Refers to line 14 in js/style-switcher.css ".style-switcher.open" */

})

// Hides the Themes menu when scrolling.
// Doesn't work at the moment. 
// The idea is that it should hide the color themes when initialing a scroll action.
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})

/*======================= Theme Colors ======================= */

const alternateStyles = document.querySelectorAll(".alternate-style");

// Function targets elements in HTML and decides if an elements is disabled or not. If it's already disabled based on
// the matching criteria, then it will remove the attribute.
// else it will set the newly selected element and set it to true to display a new color.
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    }
    else {
      style.setAttribute("disabled", "true");
    }
  });
}

/*======================= Theme Lights and Dark Mode ======================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark"); // Refers to line 17 in the style.css
})
window.addEventListener("load", ()=>{
  if(document.body.classList.contains("dark")){
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else{
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})