import 'babel-polyfill';
import scrollMonitor from 'scrollmonitor';

const tiles = document.getElementsByClassName('tile');

for (let tile of tiles) {
  const watcher = scrollMonitor.create(tile);
  watcher.enterViewport(() => {
    tile.classList.add('fade-in-left');
  });
};
