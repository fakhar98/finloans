document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Adjust this value to control when the fade-in starts
    });

    fadeElements.forEach(el => observer.observe(el));
  });
  document.addEventListener('DOMContentLoaded', (event) => {
    const animatedElement = document.getElementById('animatedElement');

    function handleResolutionChange() {
        // Check for specific resolution conditions or just reapply the animation
        if (window.innerWidth < 768) {
            // Adjust animation for smaller screens
            animatedElement.style.transition = 'opacity 2s'; // Example adjustment
        } else {
            animatedElement.style.transition = 'opacity 1s'; // Default transition
        }
        // Reapply the fade-in effect
        animatedElement.classList.remove('active');
        void animatedElement.offsetWidth; // Trigger reflow
        animatedElement.classList.add('active');
    }

    // Initial application of the animation
    handleResolutionChange();

    // Listen for window resize events
    window.addEventListener('resize', handleResolutionChange);
});
