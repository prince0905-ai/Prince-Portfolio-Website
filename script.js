const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('nav-open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

function resumeNotice() {
  alert('Resume link placeholder — add your final resume PDF/link here.');
  return false;
}
