document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const productsSection = document.getElementById('Products');
    const navbar = document.querySelector('.custom-navbar');
  
    // Función para actualizar colores
    function updateNavColors() {
      const productsPosition = productsSection.getBoundingClientRect().top;
      const isPastProducts = productsPosition <= 70; // 70px = altura de la navbar
  
      navLinks.forEach(link => {
        if (isPastProducts) {
          link.classList.add('white-links');
        } else {
          link.classList.remove('white-links');
        }
      });
    }
  
    // Efecto scroll para navbar
    window.addEventListener('scroll', function() {
      // Efecto de cambio de color
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Actualizar colores de los enlaces
      updateNavColors();
    });
  
    // Cerrar menú móvil al hacer clic
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
  
    // Scroll suave con offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Inicializar estado
    updateNavColors();
  });