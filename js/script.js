// Kelvin Hua
// 656578887
// This document contains the typing animation found on the home page,
// links to the navigation toggle when resolution is reduced (1199px and below)
// Sliding the page when switching between pages.
// Button links: "projects" and "hire me" on Home and About page respectively.

/*====================== Typing animation ======================*/
var typed = new Typed(".typing", { // Targetting the class "typing" used in my span in home section
  // strings: ["", "Researcher", "Data Analyst", "Web Developer", "Illustrator", "confused individual"],
  strings: ["", "hazard to society!", "potential psychopath?", "sewer dweller :)", "H.U.M.A.N...", "confused individual"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

/*====================== Aside ======================*/

/* Highlights the selected tab on the side bar. */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"), // Selecting the li within each list.
  totalNavList = navList.length,
  allSectioon = document.querySelectorAll(".section"), // Target each section for the function below "showSection".
  totalSection = allSectioon.length;

  // Targets the anchor (a) element within the aside to 
for (let i = 0; i < totalNavList; i++) // Syntax is similar to c++
{
  const a = navList[i].querySelector("a");
  // Event listener responds to user interaction with the webpages. We can link elements to trigger the function when interacted with.
  a.addEventListener("click", function () {
    // for (let i = 0; i < totalSection; i++) { // Removes active element so it can be selected again.
    //   allSectioon[i].classList.remove("back-section");
    // }
    removeBackSection(); // This removes the current page we are on.
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log("back-section" + navList[j].querySelector("a"))
        // allSectioon[j].classList.add("back-section");
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);

    // This closes the Aside when selected. Comment out to keep the aside present.
    // Doesn't activate if the width resolution is over 1200px.
    // Should be adaptable for mobile too.
    if(window.innerWidth <1200)
    {
      asideSectionTogglerBtn();
    }
  })
}

function removeBackSection()
{
  // Selecting an element causes it to be active forever until removed.
  // console.log() would check it.
  for (let i = 0; i < totalSection; i++) { // Removes active element so it can be selected again.
    allSectioon[i].classList.remove("back-section");
  }
}
// Since we want to target
function addBackSection(num){
  allSectioon[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) { // Removes active element so it can be selected again.
    allSectioon[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}


function updateNav(element){
  // console.log(element.getAttribute("href").split("#")[1])
  for(let i=0; i<totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex) // Testing to make sure the "hire-me class is detected."
  showSection(this);
  updateNav(this);
  removeBackSection(); // function found above.
  addBackSection(sectionIndex);
})

document.querySelector(".projects-btn").addEventListener("click", function() // Added additional button to homepage for projects.
{
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex) // Testing to make sure the "hire-me class is detected."
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => 
{
  asideSectionTogglerBtn();
})

// This shoudl convert the navigation bar to an X design based on the CSS.
function asideSectionTogglerBtn() 
{
  // I used the "open" tag mainly in @media because the nav bar is only hidden when
  // we change the screen resolution past some threshold. I set the first change to
  // happen at 1199px.
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  // Pushes the main container over when opening the Aside.
  for(let i=0; i<totalSection; i++){
    allSectioon[i].classList.toggle("open");
  }
}