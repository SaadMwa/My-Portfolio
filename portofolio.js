
const CONFIG = {
  particleCount: 50,
  scrollThrottle: 100,
  animationDelay: 150,
  preloaderDuration: 2000,
};

const PROJECTS = [
  {
    title: 'Bill-Splitter',
    tech: 'HTML,CSS,JS',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking. Built with modern technologies for optimal performance and scalability.',
    image: 'https://i.postimg.cc/wMSwWfPF/image.png',
    liveUrl: 'https://saadmwa.github.io/bill-splitter-webapp-saad/',
    codeUrl: 'https://github.com/SaadMwa/bill-splitter-webapp-saad.git',
  },
  {
    title: 'Tic-Tac-Toe',
    tech: 'HTMl,CSS,JS',
    description: 'Comprehensive analytics dashboard for SaaS businesses featuring real-time data visualization, user management, and customizable reporting. Designed with accessibility and performance in mind.',
    image: 'https://i.postimg.cc/rFxBBxJ1/image2.png',
    liveUrl: ' https://saadmwa.github.io/Tic-Tac-toe/',
    codeUrl: 'https://github.com/SaadMwa/Tic-Tac-toe.git',
  },
  {
    title: 'Funny Predictor',
    tech: 'HTMl,CSS,JS',
    description: 'Cross-platform mobile application with cloud synchronization, push notifications, and offline support. Features beautiful UI with smooth animations and intuitive user experience.',
    image: 'https://i.postimg.cc/bJ5gJVqC/image3.png',
    liveUrl: 'https://github.com/SaadMwa/Funny-future-pridictor.git',
    codeUrl: ' https://saadmwa.github.io/Funny-future-pridictor/',
  },
  {
    title: 'Wheather Web App',
    tech: 'HTMl,CSS,JS',
    description: 'Machine learning application leveraging advanced AI algorithms for intelligent data processing. Includes RESTful API, containerized deployment, and comprehensive documentation.',
    image: 'https://i.postimg.cc/X74Lv5W9/Capture-1.png',
    liveUrl: 'https://saadmwa.github.io/Wheather-APP-using-Vanilla-JS/',
    codeUrl: 'https://github.com/SaadMwa/Wheather-APP-using-Vanilla-JS.git',
  },
  {
    title: 'Weather App Using React',
    tech: 'HTMl,CSS,JS',
    description: 'Modern corporate website with CMS integration, SEO optimization, and blazing-fast performance. Built with server-side rendering for optimal search engine visibility.',
    image: 'https://i.postimg.cc/13z8CmGW/Capture.png',
    liveUrl: 'https://weather-app-using-react-6ylabmur1-saadmwas-projects.vercel.app',
    codeUrl: 'https://github.com/SaadMwa/Weather-App-using-react.git',
  },
  {
    title: 'Figma to React',
    tech: 'React.js • CSS',
    description: 'Immersive 3D portfolio experience showcasing advanced web graphics techniques. Features custom shaders, physics simulations, and stunning visual effects.',
    image: 'https://i.postimg.cc/HLCfWx6F/Capture2.png',
    liveUrl: 'https://saadmwa.github.io/Plantify.com/',
    codeUrl: 'https://github.com/SaadMwa/Plantify.com.git',
  },
    
  
  {
    title: 'To-do-List',
    tech: 'React.js • CSS',
    description: '',
    image: 'https://i.postimg.cc/QNnw9S6X/Capture4.png',
    liveUrl: 'https://saadmwa.github.io/To-do-app/',
    codeUrl: 'https://github.com/SaadMwa/To-do-app.git',
  },

    {
    title: 'Mood Journal',
    tech: 'React.js • Tailwind',
    description: '',
    image: 'https://i.postimg.cc/brPnyhmH/moddy-journal.png',
    liveUrl: 'https://saadmwa.github.io/Moody_Journal/',
    codeUrl: 'https://github.com/SaadMwa/Moody_Journal.git',
  },
];

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}


function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}


function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}


function initPreloader() {
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, CONFIG.preloaderDuration);
  });
}


function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  const navLinks = document.querySelectorAll('.navbar-link');

  
  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, CONFIG.scrollThrottle);

  window.addEventListener('scroll', handleScroll);

  
  navbarToggle.addEventListener('click', () => {
    const isActive = navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
    navbarToggle.setAttribute('aria-expanded', isActive);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
    });
  });


  const sections = document.querySelectorAll('section[id]');

  const highlightNavLink = throttle(() => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }, CONFIG.scrollThrottle);

  window.addEventListener('scroll', highlightNavLink);
}

function initParticles() {
  if (prefersReducedMotion()) return;

  const particlesContainer = document.getElementById('particles');
  const particleCount = window.innerWidth < 768 ? 25 : CONFIG.particleCount;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

   
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

   
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const duration = Math.random() * 20 + 15;
    particle.style.animationDuration = `${duration}s`;

    
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    
    particle.style.opacity = Math.random() * 0.5 + 0.3;

    particlesContainer.appendChild(particle);
  }
}


function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
       
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * CONFIG.animationDelay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}


function initSkillsAnimation() {
  const skillCards = document.querySelectorAll('.skill-card');


  const svgDefs = `
    <svg width="0" height="0" style="position: absolute;">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(180, 100%, 50%);stop-opacity:1" />
          <stop offset="100%" style="stop-color:hsl(270, 100%, 60%);stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  `;
  document.body.insertAdjacentHTML('beforeend', svgDefs);

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const progressRing = card.querySelector('.skill-progress-ring');
        const progress = progressRing.getAttribute('data-progress');

      
        card.style.setProperty('--progress', progress);

      
        setTimeout(() => {
          card.classList.add('animate');
        }, 100);

        observer.unobserve(card);
      }
    });
  }, observerOptions);

  skillCards.forEach((card) => {
    observer.observe(card);
  });
}


function initPortfolioModal() {
  const modal = document.getElementById('projectModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalTech = document.getElementById('modalTech');
  const modalDescription = document.getElementById('modalDescription');
  const modalLinks = document.querySelector('.modal-links');

  const portfolioCards = document.querySelectorAll('.portfolio-card');


  portfolioCards.forEach((card) => {
    card.addEventListener('click', (e) => {
   
      if (e.target.closest('.portfolio-view')) {
        e.stopPropagation();
      }

      const projectIndex = card.getAttribute('data-project');
      const project = PROJECTS[projectIndex];

 
      modalImage.src = project.image;
      modalImage.alt = project.title;
      modalTitle.textContent = project.title;
      modalTech.textContent = project.tech;
      modalDescription.textContent = project.description;

      modalLinks.innerHTML = `
        <a href="${project.liveUrl}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          <span>Live Demo</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        <a href="${project.codeUrl}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
          <span>View Code</span>
        </a>
      `;

     
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

    
      modalClose.focus();
    });
  });


  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}


function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const formSuccess = document.getElementById('formSuccess');


  const validateName = () => {
    const value = nameInput.value.trim();
    const error = document.getElementById('nameError');

    if (value === '') {
      error.textContent = 'Name is required';
      return false;
    } else if (value.length < 2) {
      error.textContent = 'Name must be at least 2 characters';
      return false;
    } else if (value.length > 50) {
      error.textContent = 'Name must be less than 50 characters';
      return false;
    }

    error.textContent = '';
    return true;
  };

  const validateEmail = () => {
    const value = emailInput.value.trim();
    const error = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
      error.textContent = 'Email is required';
      return false;
    } else if (!emailRegex.test(value)) {
      error.textContent = 'Please enter a valid email address';
      return false;
    } else if (value.length > 100) {
      error.textContent = 'Email must be less than 100 characters';
      return false;
    }

    error.textContent = '';
    return true;
  };

  const validateSubject = () => {
    const value = subjectInput.value.trim();
    const error = document.getElementById('subjectError');

    if (value === '') {
      error.textContent = 'Subject is required';
      return false;
    } else if (value.length < 3) {
      error.textContent = 'Subject must be at least 3 characters';
      return false;
    } else if (value.length > 100) {
      error.textContent = 'Subject must be less than 100 characters';
      return false;
    }

    error.textContent = '';
    return true;
  };

  const validateMessage = () => {
    const value = messageInput.value.trim();
    const error = document.getElementById('messageError');

    if (value === '') {
      error.textContent = 'Message is required';
      return false;
    } else if (value.length < 10) {
      error.textContent = 'Message must be at least 10 characters';
      return false;
    } else if (value.length > 1000) {
      error.textContent = 'Message must be less than 1000 characters';
      return false;
    }

    error.textContent = '';
    return true;
  };

  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  subjectInput.addEventListener('blur', validateSubject);
  messageInput.addEventListener('blur', validateMessage);

 
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
  
    
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.querySelector('span').textContent;

      submitButton.disabled = true;
      submitButton.querySelector('span').textContent = 'Sending...';

      setTimeout(() => {
 
        form.reset();

       
        formSuccess.classList.add('show');

       
        submitButton.disabled = false;
        submitButton.querySelector('span').textContent = originalText;

     
        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 5000);
      }, 1500);
    } else {
    
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isSubjectValid) subjectInput.focus();
      else if (!isMessageValid) messageInput.focus();
    }
  });
}


function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const textToCopy = button.getAttribute('data-copy');

      try {
        await navigator.clipboard.writeText(textToCopy);

    
        const originalHTML = button.innerHTML;
        button.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        `;

        setTimeout(() => {
          button.innerHTML = originalHTML;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}


function initScrollToTop() {
  const scrollTopButton = document.getElementById('scrollTop');


  const handleScroll = throttle(() => {
    if (window.scrollY > 500) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  }, CONFIG.scrollThrottle);

  window.addEventListener('scroll', handleScroll);


  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}


function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

    
      if (href === '#') return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}


function initParallax() {
  if (prefersReducedMotion()) return;

  const parallaxElements = document.querySelectorAll('.glow-orb');

  const handleScroll = throttle(() => {
    const scrolled = window.scrollY;

    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }, 16); 

  window.addEventListener('scroll', handleScroll);
}


function updateFooterYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


function initKeyboardNav() {

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}


document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio initialized');

  initPreloader();
  initNavbar();
  initParticles();
  initScrollAnimations();
  initSkillsAnimation();
  initPortfolioModal();
  initContactForm();
  initCopyButtons();
  initScrollToTop();
  initSmoothScrolling();
  initParallax();
  updateFooterYear();
  initKeyboardNav();

  if (prefersReducedMotion()) {
    console.log('♿ Reduced motion mode enabled');
  }
});


const handleResize = debounce(() => {
 
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer && !prefersReducedMotion()) {
    particlesContainer.innerHTML = '';
    initParticles();
  }
}, 500);

window.addEventListener('resize', handleResize);



if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('⚡ Page load time:', Math.round(perfData.loadEventEnd), 'ms');
    }, 0);
  });
}