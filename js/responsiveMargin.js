//Static Website Elements
const aside = document.querySelector("aside");

function update() {
  const topbarStyle = document.querySelector("header");
  const dropdownMenu = document.querySelector(".c-dropdown");

  dropdownMenu.style.marginTop = topbarStyle.offsetHeight + "px";

  // Get the computed style of the aside element
  const asideStyle = window.getComputedStyle(aside);

  // Check if the position property of the computed style is set to "fixed"
  for(let i = 0; i < sections.length; i++) {
      const sectionStyle = window.getComputedStyle(sections[i]);
      if (asideStyle.position === "absolute" && sectionStyle.display != "none") {
        // Set the padding top and bottom of the aside element to its height
        sections[i].style.paddingInline = aside.offsetWidth + "px";
      } else {
        // Reset the padding top and bottom of the aside element
        sections[i].style.marginInline = '';
      }
  }
}

window.addEventListener('load', update);
window.addEventListener('wheel', update);
window.addEventListener('touchstart', update);
window.addEventListener('touchend', update);
window.addEventListener('resize', update);

