// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Hero Section 3D Background Animation
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = hero;
    const { offsetX: x, offsetY: y } = e;
    const moveX = (x / width - 0.5) * 30;
    const moveY = (y / height - 0.5) * 30;
  
    hero.style.transform = `perspective(600px) rotateY(${moveX}deg) rotateX(${moveY}deg)`;
  });
  
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
  });
  document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
  
    document.querySelectorAll('.cube, .sphere, .blob').forEach(shape => {
      const moveX = (x - window.innerWidth / 2) / 50;
      const moveY = (y - window.innerHeight / 2) / 50;
      shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
  
  // Add hover animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

  
  // Interactive Project Card Hover Effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  