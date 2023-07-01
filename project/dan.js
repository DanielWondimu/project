// Smooth scroll to section when clicking on navigation link
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Submit form data to server using AJAX
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    const xhr = new XMLHttpRequest();
    const url = 'https://example.com/submit-form';
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Form submitted successfully!');
      }
    };
    const data = JSON.stringify({ name: name, email: email, message: message });
    xhr.send(data);
  });