/**
 * LASHES BY DENISE - Main JavaScript
 * ═════════════════════════════════════
 * Handles:
 * - Navigation scroll behavior
 * - Scroll reveal animations
 * - Smooth scroll to sections
 */

// ─────────────────────────────────────────────────
// NAVIGATION SCROLL EFFECT
// ─────────────────────────────────────────────────

const navigationElement = document.getElementById('navigation');
const SCROLL_THRESHOLD = 30;

/**
 * Toggle navigation background on scroll
 */
function handleNavScrollEffect() {
  const isScrolled = window.scrollY > SCROLL_THRESHOLD;
  navigationElement.classList.toggle('scrolled', isScrolled);
}

window.addEventListener('scroll', handleNavScrollEffect);

// ─────────────────────────────────────────────────
// SCROLL REVEAL ANIMATION
// ─────────────────────────────────────────────────

/**
 * Initialize Intersection Observer for scroll reveal animations
 */
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // Unobserve after animation to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with 'up' class
  const revealElements = document.querySelectorAll('.up');
  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

// ─────────────────────────────────────────────────
// SMOOTH SCROLL TO SECTIONS
// ─────────────────────────────────────────────────

/**
 * Handle smooth scroll button clicks
 */
function initSmoothScroll() {
  const scrollButtons = document.querySelectorAll('[data-scroll]');

  scrollButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSelector = button.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetSelector);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ─────────────────────────────────────────────────
// INITIALIZE ON DOM READY
// ─────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSmoothScroll();
});

// Also run on page load in case of caching
window.addEventListener('load', () => {
  initScrollReveal();
});
