// Preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

// Button animation
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.96)';
    setTimeout(() => btn.style.transform='scale(1)',150);
  });
});

// Formspree
const form = document.getElementById('order-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  }).then(response => {
    if(response.ok){
      alert('Заказ отправлен! Проверьте почту.');
      form.reset();
    }else{
      alert('Ошибка отправки, попробуйте снова.');
    }
  }).catch(()=>alert('Ошибка сети.'));
});
