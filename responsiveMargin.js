//Static Website Elements
const aside = document.querySelector("aside");
const main = document.querySelector("main");

//Timeline Section Elements
const timelinesDateYear = document.querySelectorAll(".date-year");
const timelinesDateDot = document.querySelectorAll(".date-dot");

function update() {
  // Get the computed style of the aside element
  const asideStyle = window.getComputedStyle(aside);

  // Check if the position property of the computed style is set to "fixed"
  if (asideStyle.position === "fixed") {
    // Set the padding top and bottom of the aside element to its height
    main.style.marginInline = aside.offsetWidth + "px";
  } else {
    // Reset the padding top and bottom of the aside element
    main.style.marginInline = '';
  }

  /* Timeline Section */
  console.log(timelinesDateYear.length);
  for(let i = 0; i < timelinesDateYear.length; i++) {
    timelinesDateDot[i].style.height = timelinesDateYear[i].offsetHeight + "px";
    
  }
}

window.addEventListener('load', update);
window.addEventListener('resize', update);

