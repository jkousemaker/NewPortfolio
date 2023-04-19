// script.js
// Detect scroll event and call the fadeBlocks function
window.addEventListener('scroll', fadeBlocks);

function fadeBlocks() {
  // Get the current vertical scroll position
  var scrollPosition = window.pageYOffset;

  // Call a function to check the visibility of each block
  checkVisibility(scrollPosition);
}

function checkVisibility(scrollPosition) {
  // Get all the blocks using a CSS class or any other selector
  var blocks = document.querySelectorAll('.block');

  // Loop through each block and calculate its position relative to the viewport
  blocks.forEach(function(block) {
    var blockRect = block.getBoundingClientRect();

    // Check if the bottom of the block is greater than 0 and the top of the block is less than the height of the viewport
    if (blockRect.bottom > 0 && blockRect.top < window.innerHeight) {
      // If the block is fully visible in the viewport, trigger the fade-in animation for its content with a delay
      fadeIn(block, 0.5);
    } else {
      // If the block is not fully visible in the viewport, trigger the fade-out animation for its content with a delay
      fadeOut(block, 0.5);
    }
  });
}

function fadeIn(block, delay) {
  // Get the content elements within the block
  var contentElements = block.querySelectorAll('.content');

  // Loop through each content element and set its opacity to 1 with a delay to trigger the fade-in effect
  contentElements.forEach(function(contentElement, index) {
    contentElement.style.transitionDelay = delay * index + 's';
    contentElement.style.opacity = 1;
  });
}

function fadeOut(block, duration) {
  // Get the content elements within the block
  var contentElements = block.querySelectorAll('.content');

  // Loop through each content element and set its opacity to 0 with a duration to trigger the fade-out effect
  contentElements.forEach(function(contentElement, index) {
    contentElement.style.transitionDuration = duration + 's';
    contentElement.style.opacity = 0;
  });
}
