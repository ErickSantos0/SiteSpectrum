document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('jogos').scrollIntoView({ behavior: 'smooth' });
});

// Redirecionamento ao clicar em qualquer card
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.hash = '#jogos';
  });
});
