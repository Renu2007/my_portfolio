/**
 * Student Portfolio - Interactive JavaScript
 * Specialization: B.Tech CSE (Artificial Intelligence & Machine Learning)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DOM Elements Selection
  // -------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const typingElement = document.getElementById('typing-text');
  const currentYearSpan = document.getElementById('current-year');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  
  // Modal Elements
  const projectModal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalBadge = document.getElementById('modal-badge');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const demoButtons = document.querySelectorAll('.demo-trigger');

  // -------------------------------------------------------------------------
  // 2. Set Dynamic Year
  // -------------------------------------------------------------------------
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 3. Mobile Hamburger Menu Toggle
  // -------------------------------------------------------------------------
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && navMenu.classList.contains('open')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Navbar Scroll Shadow & Back to Top Toggle
  // -------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Highlight current active section in nav
    updateActiveNav();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 5. Active Section Indicator on Scroll
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. Smooth Scrolling for Internal Links
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Hero Typing Animation
  // -------------------------------------------------------------------------
  if (typingElement) {
    const roles = [
      'AI & Machine Learning',
      'Python Programming',
      'Beginner Problem Solving',
      'Web Development'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseDelay = 1800;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  // -------------------------------------------------------------------------
  // 8. Projects Preview Modal Handler
  // -------------------------------------------------------------------------
  const projectDetails = {
    blog: {
      title: 'Responsive Blog Application',
      category: 'Web Development & UI Design',
      description: 'This is a sample project template representing a fully responsive tech blog. It incorporates dynamic post rendering, category navigation, clean typography, and a reading mode optimized for all screen sizes.'
    },
    sms: {
      title: 'Student Management System',
      category: 'Software Architecture & Data Logic',
      description: 'This sample project demonstrates student record management, course grade tracking, attendance monitoring, and administrative reports built with structured programming principles.'
    },
    ai: {
      title: 'AI Predictive Classifier',
      category: 'Artificial Intelligence & Machine Learning',
      description: 'This sample project demonstrates data preprocessing, feature normalization, and classification algorithm evaluation (Accuracy: 94.2%). Designed as an introductory showcase of machine learning pipelines in Python.'
    }
  };

  function openProjectModal(key) {
    const project = projectDetails[key];
    if (!project || !projectModal) return;

    modalTitle.textContent = project.title;
    modalBadge.textContent = project.category;
    modalDescription.textContent = project.description;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  demoButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetKey = button.getAttribute('data-target');
      openProjectModal(targetKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 9. Contact Form Client-Side Validation & Feedback
  // -------------------------------------------------------------------------
  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields.';
        return;
      }

      // Simple email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please provide a valid email address.';
        return;
      }

      // Success message (static front-end mode)
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `✨ <strong>Thank you, ${name}!</strong> Your message has been prepared. Since this portfolio is currently running client-side, please reach out directly through the LinkedIn, GitHub, or Email buttons above.`;

      contactForm.reset();

      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 9000);
    });
  }

});
