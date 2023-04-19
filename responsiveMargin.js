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
    aside.style.marginTop = header.offsetHeight + "px";
    aside.style.marginBottom = bottom.offsetHeight + "px";
    main.style.marginInline = aside.offsetWidth + "px";
  } else {
    // Reset the padding top and bottom of the aside element
    aside.style.marginTop = 0;
    aside.style.marginBottom = 0;
    main.style.marginInline = '';
  }
}

window.addEventListener('load', update);
window.addEventListener('resize', update);
