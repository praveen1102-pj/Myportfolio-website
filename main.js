/* ==========================================================================
   PRAVEEN P. - PORTFOLIO INTERACTIVE SCRIPTS
   - 3D Particle Nebula Canvas
   - 3D Card Parallax Tilt (Vanilla JS)
   - Dynamic Role Typewriter
   - Certificate Gallery Filter & Lightbox with Keyboard Controls
   - Mobile Drawer Navigation
   - Active Nav Spy & Smooth Scrolling
   - Clipboard Copy & Interactive Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  init3DTilt();
  initCertificatesGallery();
  initNavbar();
  initContactForm();
  initResumeViewer();
});

/* ==========================================================================
   1. 3D PARTICLE NEBULA CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  let mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = (Math.random() - 0.5) * 0.45;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.4 ? '#a855f7' : (Math.random() > 0.5 ? '#c084fc' : '#818cf8');
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 1.5;
          this.y -= dirY * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }

  // Create initial particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#a855f7';
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    // Update and draw
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. DYNAMIC TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-target');
  if (!target) return;

  const roles = [
    'Web Developer',
    'BCA Student',
    'Frontend Developer',
    'Problem Solver'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function tick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 50;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 110;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause on full text
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before typing new
    }

    setTimeout(tick, typeSpeed);
  }

  tick();
}

/* ==========================================================================
   3. 3D CARD PARALLAX TILT (Smooth Hardware Accelerated)
   ========================================================================== */
function init3DTilt() {
  // Only activate on devices with a mouse pointer
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.tilt-card, .hero-3d-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (degrees)
      const rotateX = ((centerY - y) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   4. CERTIFICATES GALLERY & LIGHTBOX MODAL
   ========================================================================== */
function initCertificatesGallery() {
  const cards = document.querySelectorAll('.cert-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalIssuer = document.getElementById('lightbox-issuer');
  const modalDownload = document.getElementById('lightbox-download');
  const closeBtn = document.getElementById('lightbox-close');

  let currentCertificates = Array.from(cards);
  let activeIndex = 0;

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });

      // Update visible certificate list for lightbox navigation
      currentCertificates = Array.from(cards).filter(c => c.style.display !== 'none');
    });
  });

  // Open Lightbox
  function openLightbox(index) {
    const card = currentCertificates[index];
    if (!card) return;

    activeIndex = index;
    const imgEl = card.querySelector('.cert-img');
    const titleEl = card.querySelector('.cert-title');
    const issuerEl = card.querySelector('.cert-issuer');

    modalImg.src = imgEl.src;
    modalImg.alt = imgEl.alt;
    modalTitle.textContent = titleEl.textContent;
    modalIssuer.textContent = issuerEl.textContent;
    modalDownload.href = imgEl.src;
    modalDownload.setAttribute('download', `${titleEl.textContent.trim().replace(/\s+/g, '_')}.jpg`);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close Lightbox
  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Next / Previous
  function nextCert() {
    activeIndex = (activeIndex + 1) % currentCertificates.length;
    openLightbox(activeIndex);
  }

  function prevCert() {
    activeIndex = (activeIndex - 1 + currentCertificates.length) % currentCertificates.length;
    openLightbox(activeIndex);
  }

  // Attach card click handlers
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = currentCertificates.indexOf(card);
      if (idx !== -1) {
        openLightbox(idx);
      }
    });
  });

  // Modal close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-image-box')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextCert();
    if (e.key === 'ArrowLeft') prevCert();
  });

  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');
  if (nextBtn) nextBtn.addEventListener('click', nextCert);
  if (prevBtn) prevBtn.addEventListener('click', prevCert);
}

/* ==========================================================================
   5. NAVBAR SCROLL & ACTIVE SPY
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close-btn');
  const overlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll glass blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    const scrollPos = window.scrollY + 180;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu open/close
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/* ==========================================================================
   6. CONTACT FORM & INTERACTIVE TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  // Copy email functionality
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'praveen739724@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: praveen739724@gmail.com');
      }).catch(() => {
        showToast('Email: praveen739724@gmail.com');
      });
    });
  });

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Build mailto URI
      const mailtoUrl = `mailto:praveen739724@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      window.location.href = mailtoUrl;

      showToast('Opening your default email client to send message...');
      form.reset();
    });
  }
}

// Global Toast Alert
function showToast(msg) {
  let toast = document.querySelector('.toast-alert');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-alert';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span class="toast-text">${msg}</span>
    `;
    document.body.appendChild(toast);
  } else {
    toast.querySelector('.toast-text').textContent = msg;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   7. RESUME MODAL VIEWER
   ========================================================================== */
function initResumeViewer() {
  const viewResumeBtns = document.querySelectorAll('.open-resume-modal-btn');
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');

  if (!resumeModal) return;

  function openResume() {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResume();
    });
  });

  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResume);
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
      closeResume();
    }
  });
}
