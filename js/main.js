// ====== MOBILE MENU TOGGLE ======
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ====== CONTACT FORM ======
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        if (successMessage) {
          successMessage.style.display = 'block';
          successMessage.style.opacity = '1';
        }
        contactForm.reset();

        setTimeout(() => {
          if (successMessage) {
            successMessage.style.opacity = '0';
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 500);
          }
        }, 5000);

      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    })
    .catch(() => {
      alert('Oops! There was a problem submitting your form.');
    });
  });
}
