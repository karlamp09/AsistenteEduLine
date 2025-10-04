// Pequeñas interacciones: toggle nav y demo alert
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const btnDemo = document.getElementById('btnDemo');

  navToggle && navToggle.addEventListener('click', () => {
    if (mainNav.style.display === 'flex' || mainNav.style.display === '') {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.background = 'rgba(255,255,255,0.98)';
      mainNav.style.padding = '10px';
      mainNav.style.borderRadius = '10px';
      mainNav.style.boxShadow = '0 8px 24px rgba(11,114,185,0.08)';
    }
  });

  btnDemo && btnDemo.addEventListener('click', () => {
    alert('Demo: En breve abriremos una vista previa del curso. Mientras tanto, puedes chatear con PROMPTER en la esquina inferior derecha para pedir un resumen del módulo 1.');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
