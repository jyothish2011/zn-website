import { useEffect } from 'react';

export function useScrollReveal(selector, className) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(selector);

    function reveal() {
      const windowHeight = window.innerHeight;
      for (let i = 0; i < revealElements.length; i++) {
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 130;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add(className);
        } else {
          revealElements[i].classList.remove(className);
        }
      }
    }

    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, [selector, className]);
}
