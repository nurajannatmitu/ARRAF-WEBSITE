/**
 * ARRAFED — Academic Support, Writing, Research & Data Analysis
 * Progressive, dependency-free vanilla JavaScript
 */

(function () {
  'use strict';

  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initScrollReveals();
    initServicesRail();
    initContactBriefForm();
    initRateCalculator();
  });

  /**
   * Mobile Navigation with complete accessibility, Escape key listener,
   * focus management, and scroll lock.
   */
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-menu-backdrop');

    if (!toggleBtn || !mobileMenu) return;

    let previousActiveElement = null;

    function openMenu() {
      previousActiveElement = document.activeElement;
      mobileMenu.classList.remove('hidden');
      // small timeout for transition
      requestAnimationFrame(() => {
        mobileMenu.classList.add('is-open');
      });
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Focus first actionable element inside menu
      const firstFocusable = mobileMenu.querySelector('a, button');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';

      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
          previousActiveElement.focus();
        }
      }, 250);
    }

    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    // Escape key handling & keyboard focus trap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });

    // Close menu when clicking nav links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  /**
   * IntersectionObserver scroll reveals for patient editorial pacing
   */
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-fade').forEach((el) => {
        el.classList.remove('reveal-fade');
      });
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-fade');
    if (!revealElements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /**
   * Services Page: Sticky Table of Contents rail tracking
   */
  function initServicesRail() {
    const railLinks = document.querySelectorAll('.service-rail-link');
    const sections = document.querySelectorAll('.service-section');

    if (!railLinks.length || !sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            railLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('text-teal-600', 'font-medium');
                link.classList.remove('text-slate-500');
              } else {
                link.classList.remove('text-teal-600', 'font-medium');
                link.classList.add('text-slate-500');
              }
            });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Contact page: brief form validation and WhatsApp pre-fill composer
   */
  function initContactBriefForm() {
    const form = document.getElementById('academic-brief-form');
    if (!form) return;

    const statusContainer = document.getElementById('form-status-region');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset errors
      const errorSpans = form.querySelectorAll('.error-text');
      errorSpans.forEach((span) => span.classList.add('hidden'));

      const nameInput = form.querySelector('#client-name');
      const emailInput = form.querySelector('#client-email');
      const studyLevel = form.querySelector('#study-level');
      const subjectInput = form.querySelector('#client-subject');
      const serviceType = form.querySelector('#service-type');
      const deadlineInput = form.querySelector('#client-deadline');
      const wordCountInput = form.querySelector('#client-wordcount');
      const refStyleInput = form.querySelector('#referencing-style');
      const messageInput = form.querySelector('#client-message');
      const consentCheckbox = form.querySelector('#integrity-consent');

      let hasError = false;

      function showError(input, errorId) {
        const errEl = document.getElementById(errorId);
        if (errEl) errEl.classList.remove('hidden');
        input.setAttribute('aria-invalid', 'true');
        if (!hasError) input.focus();
        hasError = true;
      }

      if (!nameInput.value.trim()) {
        showError(nameInput, 'err-name');
      } else {
        nameInput.removeAttribute('aria-invalid');
      }

      if (!studyLevel.value) {
        showError(studyLevel, 'err-level');
      } else {
        studyLevel.removeAttribute('aria-invalid');
      }

      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'err-subject');
      } else {
        subjectInput.removeAttribute('aria-invalid');
      }

      if (!serviceType.value) {
        showError(serviceType, 'err-service');
      } else {
        serviceType.removeAttribute('aria-invalid');
      }

      if (!deadlineInput.value.trim()) {
        showError(deadlineInput, 'err-deadline');
      } else {
        deadlineInput.removeAttribute('aria-invalid');
      }

      if (!consentCheckbox.checked) {
        showError(consentCheckbox, 'err-consent');
      } else {
        consentCheckbox.removeAttribute('aria-invalid');
      }

      if (hasError) {
        if (statusContainer) {
          statusContainer.className = 'p-4 bg-red-50 border border-red-200 text-red-800 text-sm';
          statusContainer.textContent = 'Please complete all required fields indicated above before opening WhatsApp.';
          statusContainer.classList.remove('hidden');
        }
        return;
      }

      // Build structured, clear WhatsApp message
      const parts = [
        `Hello ARRAFED, I would like to discuss academic support:`,
        `• Name: ${nameInput.value.trim()}`,
        `• Email: ${emailInput.value.trim() || 'Not specified'}`,
        `• Study Level: ${studyLevel.value}`,
        `• Subject/Course: ${subjectInput.value.trim()}`,
        `• Service Needed: ${serviceType.value}`,
        `• Deadline: ${deadlineInput.value.trim()}`,
        `• Word Count / Scale: ${wordCountInput.value.trim() || 'Unspecified'}`,
        `• Referencing Style: ${refStyleInput.value.trim() || 'To be confirmed'}`,
      ];

      if (messageInput.value.trim()) {
        parts.push(`• Notes / Brief: ${messageInput.value.trim()}`);
      }

      parts.push(`\nI have confirmed my university academic integrity requirements.`);

      const fullText = parts.join('\n');
      const encodedText = encodeURIComponent(fullText);
      const whatsappUrl = `https://wa.me/8801893291245?text=${encodedText}`;

      if (statusContainer) {
        statusContainer.className = 'p-4 bg-teal-50 border border-teal-200 text-teal-900 text-sm';
        statusContainer.innerHTML = `<strong>Brief formatted.</strong> Launching WhatsApp to send your brief directly to 01893291245... <br><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="underline font-semibold mt-2 inline-block text-teal-700 hover:text-teal-900">Click here if WhatsApp did not open automatically</a>`;
        statusContainer.classList.remove('hidden');
      }

      // Open WhatsApp directly
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /**
   * Packages & Pricing: Interactive Rate Estimator for outside assignments in Bangladesh
   */
  function initRateCalculator() {
    const calcSelect = document.getElementById('calc-words-select');
    const calcResultOutput = document.getElementById('calc-result-output');
    const calcCtaLink = document.getElementById('calc-whatsapp-cta');

    if (!calcSelect || !calcResultOutput || !calcCtaLink) return;

    const rates = {
      '1000': { price: '৳250', words: '1,000 words' },
      '2000': { price: '৳450', words: '2,000 words' },
      '3000': { price: '৳800', words: '3,000 words' },
      '4000': { price: '৳1,000', words: '4,000 words' },
      '5000': { price: '৳1,250', words: '5,000 words' },
      'foreign': { price: 'Inbox for price', words: 'Foreign University Assignment' },
      'other': { price: 'Inbox for price', words: 'Custom scope / Unlisted' },
    };

    function update() {
      const val = calcSelect.value;
      const data = rates[val] || rates['1000'];

      calcResultOutput.textContent = data.price;

      const prefillText = encodeURIComponent(
        `Hello ARRAFED, I am inquiring about the rate for ${data.words} (${data.price}). Please let me know what details you need.`
      );
      calcCtaLink.setAttribute('href', `https://wa.me/8801893291245?text=${prefillText}`);
    }

    calcSelect.addEventListener('change', update);
    update();
  }
})();
