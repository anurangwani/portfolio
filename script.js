// Smooth scroll
document.querySelector('.cta').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// GSAP Animation
gsap.from('.animated-title', {
  y: -100,
  opacity: 0,
  duration: 1.5,
  ease: 'bounce.out',
});
gsap.from('.tagline', {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 1,
});
gsap.from('.cta', {
  scale: 0,
  delay: 1.2,
  duration: 0.8,
  ease: 'back.out(1.7)',
});
