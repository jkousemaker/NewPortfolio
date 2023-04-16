// Get the navbar element
const navbar = document.querySelector('aside');

// Get the content element
const content = document.querySelector('main');

// Get the footer element
const footer = document.querySelector('.bottom');

// Update content padding to match navbar and footer height
function updateContentPadding() {
    // Check if window width is smaller than the breakpoint for "sm"
    const isLargeScreen = window.innerWidth >= 640; // 640px is the breakpoint width for "sm" in Tailwind CSS
    const navbarHeight = navbar.offsetHeight;
    const footerHeight = footer.offsetHeight;
    
    // Conditionally apply padding only when window width is smaller than the breakpoint
    content.style.paddingTop = isLargeScreen ? '0' : `${navbarHeight}px`;
    content.style.paddingBottom = `${footerHeight}px`;
  }
  
// Call the function on page load and window resize
window.addEventListener('load', updateContentPadding);
window.addEventListener('resize', updateContentPadding);


// Get all parent div elements
const parentDivs = document.querySelectorAll("section");

// Check if children have enough height within parent div
function checkChildrenHeight() {
  console.log("check");
  parentDivs.forEach(parentDiv => {
    const parentHeight = parentDiv.offsetHeight;

    if(parentHeight != 0) {
      const childrenHeight = Array.from(parentDiv.children).reduce((totalHeight, child) => totalHeight + child.offsetHeight, 0);
      const paddingNeeded = parentHeight - childrenHeight;
      
      console.log(childrenHeight, parentHeight);
      console.log(paddingNeeded > 2.5 * 16);

      if (paddingNeeded > 2.5 * 16) { // 2.5rem converted to pixels
        if(parentDiv.classList.contains("py-10")) {
          parentDiv.classList.remove("py-10");
        }
      } else {
        if(!parentDiv.classList.contains("py-10")) {
          parentDiv.classList.add("py-10");
        }
      }
    }
    
  });
}

// Call the function initially and on window resize
window.addEventListener('load', checkChildrenHeight);
window.addEventListener('resize', checkChildrenHeight);
