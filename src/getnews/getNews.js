import render from '../render/render';
import state from '../state/state';

function fch() {
  fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((newsi) => {
      console.log(newsi);
      state.news = newsi;
      render();
    });
}

export default fch;
