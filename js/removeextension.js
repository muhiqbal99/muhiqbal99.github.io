// removeextension.js

document.addEventListener('DOMContentLoaded', function () {
    // Handle navigation links
    function loadPage(page) {
      fetch(page + '/index.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
          console.error('Error loading page:', error);
        });
    }
  
    function navigate(event) {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      window.history.pushState({}, '', href);
      loadPage(href.substring(1));
    }
  
    // Attach click event listeners to navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.addEventListener('click', navigate));
  
    // Load initial content based on the current URL
    const initialPage = window.location.pathname.substring(1) || 'index';
    loadPage(initialPage);
  });
  