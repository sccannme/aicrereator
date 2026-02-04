const form = document.getElementById('order-form');
const confirmSound = document.getElementById('confirm-sound');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      confirmSound.play();
      alert('Заказ отправлен! Проверьте почту.');
      form.reset();
    } else {
      alert('Ошибка отправки, попробуйте снова.');
    }
  })
  .catch(() => alert('Ошибка сети. Проверьте подключение и HTTPS.'));
});
