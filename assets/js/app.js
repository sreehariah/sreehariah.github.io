/* app.js - Frontend Interactivity */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Menu Toggle --- */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      // small delay to allow display:block to apply before opacity transition
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0');
        mobileMenu.classList.add('opacity-100');
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
      }, 10);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      mobileMenu.classList.remove('opacity-100');
      mobileMenu.classList.add('opacity-0');
      menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); // match transition duration
      document.body.style.overflow = '';
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });


  /* --- Intersection Observer for Scroll Animations --- */
  const fadeElems = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.15, // trigger when 15% of element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, appearOptions);

  fadeElems.forEach(elem => {
    appearOnScroll.observe(elem);
  });


  /* --- Navbar Background on Scroll --- */
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('shadow-lg');
      nav.classList.replace('py-4', 'py-3');
    } else {
      nav.classList.remove('shadow-lg');
      nav.classList.replace('py-3', 'py-4');
    }
  });


  /* --- Active Link Highlighting --- */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-primary');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('text-primary');
      }
    });
  });

});
