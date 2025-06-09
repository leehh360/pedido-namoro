document.getElementById('responder').addEventListener('click', function() {
  const resposta = prompt('Então, vai ser meu namorado(a)? 💌 (Responda sim ou não)');
  
  if (!resposta) {
    alert('Preciso de uma resposta! 😢');
  } else if (resposta.toLowerCase() === 'sim') {
    document.getElementById('resposta').textContent = 'Yay! Estou muito feliz! 💕';
  } else if (resposta.toLowerCase() === 'não') {
    document.getElementById('resposta').textContent = 'Tudo bem, obrigado por responder com sinceridade. 😊';
  } else {
    alert('Por favor, responda apenas "sim" ou "não".');
  }
});

