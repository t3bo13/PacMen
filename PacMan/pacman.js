
var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ['Images/PacMan1.png', 'Images/PacMan2.png'],
  ['Images/PacMan3.png', 'Images/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run(pageWidth) {
  let img = document.createElement('img');
  img.src = pacArray[direction][focus];
  img.style.position = 'absolute';
  img.style.left = pos + 'px';
  img.onclick = function() {
    Run(pageWidth);
  };
  document.body.appendChild(img);

  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, img.width, pos, pageWidth);

  if (direction) {
    pos -= 20;
  } else {
    pos += 20;
  }
}

setInterval(function() {
  Run(pageWidth);
}, 300);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction === 0 && pos + imgWidth > pageWidth) {
    direction = 1;
  } else if (direction === 1 && pos < 0) {
    direction = 0;
  }
  return direction;
}

