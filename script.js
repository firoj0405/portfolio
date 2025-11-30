// Basic interactions: reveal on scroll, smooth anchor scroll, modal open/close, year update.

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for nav links
  document.querySelectorAll('.top-nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e=>{
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => io.observe(r));

  // Modal logic for workflow
  const modal = document.getElementById('modal');
  const openBtn = document.querySelector('[data-action="open-workflow"]');
  const closeElements = document.querySelectorAll('[data-action="close-modal"]');

  function openModal(){
    if (!modal) return;
    modal.setAttribute('data-open','true');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    if (!modal) return;
    modal.removeAttribute('data-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  closeElements.forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(b => {
    b.addEventListener('click', closeModal);
  });
});
