// Scroll suave en navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Validación de formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const msg = document.getElementById('form-msg');

  if (!nombre || !email || !mensaje) {
    msg.textContent = 'Por favor complete todos los campos.';
    msg.style.color = 'red';
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = 'Correo electrónico no válido.';
    msg.style.color = 'red';
    return;
  }

  msg.textContent = 'Mensaje enviado correctamente.';
  msg.style.color = 'green';
  this.reset();
});

// Animación con IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
