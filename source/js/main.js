import 'babel-polyfill';
import gallery from './gallery';
import scrollMonitor from 'scrollmonitor';

const profilesLeft = document.querySelectorAll('.profiles-left .profile');
const profilesRight = document.querySelectorAll('.profiles-right .profile');

for (let profile of profilesLeft) {
  const watcher = scrollMonitor.create(profile);
  watcher.one('enterViewport', () => {
    profile.classList.add('fade-in-left');
  });
};

for (let profile of profilesRight) {
  const watcher = scrollMonitor.create(profile);
  watcher.one('enterViewport', () => {
    profile.classList.add('fade-in-right');
  });
};

const overlay = document.querySelector('.map-overlay');
const iframe = document.querySelector('.map iframe');

overlay.onclick = () => {
  iframe.style.pointerEvents = 'auto';
  overlay.style.pointerEvents = 'none';
};

document
  .querySelector('.gallery')
  .addEventListener('click', gallery.show);
