'use strict';
const palettes = [['#cb8c70','#d99e83','#b8775e'],['#a8ba97','#bcccaa','#8da37f'],['#efdbaf','#e1c690','#f6e6c1']];
const faces = [...document.querySelectorAll('.face')];
let twist = 0;
function drawCube(shuffle = false) {
  faces.forEach((face, index) => {
    face.replaceChildren(...Array.from({length:9}, (_, n) => {
      const tile = document.createElement('i');
      const color = shuffle && (n + twist) % 3 === 0 ? (index + twist) % 3 : index;
      tile.style.backgroundColor = palettes[color][n % 3];
      return tile;
    }));
  });
}
drawCube();
document.getElementById('shuffle')?.addEventListener('click', () => {
  twist++;
  drawCube(true);
  document.querySelector('.cube').style.transform = `rotateX(${-25 + (twist % 2) * 7}deg) rotateY(${-35 + (twist % 3) * 5}deg)`;
  document.getElementById('cube-status').textContent = `Cube colors shuffled. Twist ${twist}.`;
});
