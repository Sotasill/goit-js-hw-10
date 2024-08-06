document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      const loader = document.getElementById('loader');
      loader.style.display = 'block';
  
      const targetUrl = this.getAttribute('href');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1500); 
    });
  });
  