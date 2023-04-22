//Static Website Elements
const aside = document.querySelector("aside");
const main = document.querySelector("main");

//Timeline Section Elements
const timelines = document.querySelectorAll(".timeline");
const timelinesDate = document.querySelectorAll(".timeline-date > h2");
const timelinesContent = document.querySelectorAll(".timeline-content");

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
  for(let i = 0; i < timelines.length; i++) {
    const timelineStyle = window.getComputedStyle(timelines[i]);

    timelinesDate[i].style.width = '';
    timelinesContent[i].style.marginTop = '';

    if(timelineStyle.flexDirection === "row") {
      timelinesDate[i].style.width = timelinesDate[i].offsetWidth / 2 + "px";
      timelinesContent[i].style.marginTop = timelinesDate[i].offsetHeight + "px";
    }
  }
}

window.addEventListener('load', update);
window.addEventListener('resize', update);

