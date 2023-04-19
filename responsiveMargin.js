const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const bottom = document.querySelector(".c-bottom");

function update() {
  // Get the computed style of the aside element
  const asideStyle = window.getComputedStyle(aside);

  // Check if the position property of the computed style is set to "fixed"
  if (asideStyle.position === "fixed") {
    // Set the padding top and bottom of the aside element to its height
    aside.style.paddingTop = header.offsetHeight + "px";
    aside.style.paddingBottom = bottom.offsetHeight + "px";
    main.style.paddingInline = aside.offsetWidth + "px";
  } else {
    // Reset the padding top and bottom of the aside element
    aside.style.paddingTop = 0;
    aside.style.paddingBottom = 0;
    main.style.paddingInline = '';
  }
}

window.addEventListener('load', update);
window.addEventListener('resize', update);
