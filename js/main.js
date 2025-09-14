
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}


const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if(response.ok){
                successMessage.style.display = 'block';
                successMessage.style.opacity = '1'; 
                contactForm.reset();

                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 500); 
                }, 5000);

            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form.');
        });
    });
}
