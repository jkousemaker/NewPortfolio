const aside = document.querySelector("aside");
const main = document.querySelector("main");

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
}

window.addEventListener('load', update);
window.addEventListener('resize', update);
