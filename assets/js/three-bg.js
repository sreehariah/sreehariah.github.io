/* three-bg.js - Initializes the Three.js powered background effect */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the element exists and Vanta is loaded
  if (document.getElementById('canvas-container') && window.VANTA) {
    VANTA.NET({
      el: "#canvas-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0df0d6,     // Neon Cyan (matches --primary)
      backgroundColor: 0x0a0a0f, // Dark BG (matches --bg-dark)
      points: 12.00,
      maxDistance: 22.00,
      spacing: 16.00,
      showDots: true
    })
  } else {
    console.warn("Vanta JS or canvas container not loaded.");
  }
});
