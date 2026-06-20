import { useEffect } from 'react';

export const useScrollReveal = (dependency = null) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Triggers slightly before element enters view
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, we can unobserve if we only want it to animate once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements needing a reveal effect
    const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    // Handle staggered children transition delays
    const staggerContainers = document.querySelectorAll('.reveal-stagger');
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.reveal-stagger-item, .reveal-up');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        // Make sure the items are also observed if not already caught
        observer.observe(item);
      });
    });

    return () => {
      elements.forEach((el) => {
        try {
          observer.unobserve(el);
        } catch (e) {
          // Element might have been unmounted already
        }
      });
    };
  }, [dependency]);
};

export default useScrollReveal;
