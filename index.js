import QRCode from 'qrcode'

$form = document.querySelector('form');
$qrWrapper = document.querySelector('.qr-wrapper');

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  const $button = document.querySelector('button[type="submit"]');
  const $spinnerWrapper = document.querySelector('.spinner-wrapper');

  $qrWrapper.innerHTML = '';

  $button.textContent = 'Generando...';
  $button.setAttribute('disabled', true);
  $button.setAttribute('hidden', true);
  $spinnerWrapper.removeAttribute('hidden');

  const $input = document.querySelector('input');
  const text = $input.value;

  setTimeout(() => {
    QRCode.toDataURL(text, {
      width: 1200
    })
      .then(url => {
        $qrWrapper.innerHTML = `<img src="${url}">`;

        $button.textContent = '¡Listo! 🎉';
        $button.removeAttribute('disabled');
        $button.removeAttribute('hidden');
        $spinnerWrapper.setAttribute('hidden', true);

        setTimeout(() => {
          $button.textContent = 'Generar imagen';
        }, 2000);
      })
      .catch(err => {
        console.error(err)
      })
  }, 1000);
});