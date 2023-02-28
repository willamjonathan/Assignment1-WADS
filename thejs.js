function isElementInView(element) {
    const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (
          rect.top >= 0 &&
          rect.bottom <= windowHeight
        );
      }
    
      function fadeInOnScroll() {
        const fadeElement = document.getElementById("fade-in-element");
        if (isElementInView(fadeElement)) {
          fadeElement.classList.add("active");
        }
      }
    
      window.addEventListener('scroll', fadeInOnScroll);
