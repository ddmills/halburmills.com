const overlay = document.querySelector('.map-overlay');
const iframe = document.querySelector('.map iframe');

if (overlay && iframe) {
  overlay.onclick = () => {
    iframe.style.pointerEvents = 'auto';
    overlay.style.pointerEvents = 'none';
  };
}
