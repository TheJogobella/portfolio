function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  const elementsToFadeIn = document.querySelectorAll('.fade-in');
  
  function fadeInElementsOnScroll() {
    elementsToFadeIn.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('fade-in--active');
      } else {
        el.classList.remove('fade-in--active');
      }
    });
  }
  
  window.addEventListener('scroll', fadeInElementsOnScroll);