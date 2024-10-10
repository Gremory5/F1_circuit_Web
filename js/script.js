// Get all elements with the class 'circuit-item'
const fadeElements = document.querySelectorAll('.circuit-item');

// Function to check if an element is in view
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the element is partially visible in the viewport
  const isVisible =
    rect.top < windowHeight &&
    rect.bottom > 0 &&
    rect.left < windowWidth &&
    rect.right > 0;

  return isVisible;
}

// Function to handle the fade animation
function handleFadeAnimation() {
  fadeElements.forEach((element) => {
    if (isElementInView(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Add an event listener for scroll
window.addEventListener('scroll', handleFadeAnimation);

// Call the handleFadeAnimation function initially
handleFadeAnimation();