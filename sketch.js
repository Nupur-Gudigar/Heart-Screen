let heartColors;
let hearts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  heartColors = [
    color(255, 182, 193), // light pink
    color(255, 105, 180), // hot pink
    color(255, 0, 0),     // red
    color(139, 0, 0)      // dark red
  ];

  for (let i = 0; i < 20; i++) {
    hearts.push({
      size: i * 50 + 50,
      col: heartColors[i % heartColors.length]
    });
  }

  noStroke();

  // 👇 Credit text and hyperlinks
  let credit = createP("Made with 💓 by Nupur Gudigar • ");
  credit.style('color', '#fff');
  credit.style('font-family', 'sans-serif');
  credit.style('font-size', '14px');
  credit.position(20, height - 40);

  let githubLink = createA('https://github.com/Nupur-Gudigar', 'GitHub');
  githubLink.parent(credit);
  githubLink.style('color', '#ff69b4');
  githubLink.style('margin-left', '10px');

  let linkedinLink = createA('http://linkedin.com/in/nupur-gudigar', 'LinkedIn');
  linkedinLink.parent(credit);
  linkedinLink.style('color', '#ff69b4');
  linkedinLink.style('margin-left', '10px');

  let codedexLink = createA('https://www.codedex.io/@novana', 'Codedex');
  codedexLink.parent(credit);
  codedexLink.style('color', '#ff69b4');
  codedexLink.style('margin-left', '10px');
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  for (let i = hearts.length - 1; i >= 0; i--) {
    let h = hearts[i];
    fill(h.col);
    drawHeart(0, 0, h.size);
    h.size -= 2;

    if (h.size < 30) {
      h.size = hearts[hearts.length - 1].size + 50;
      h.col = heartColors[int(random(heartColors.length))];
      hearts.push(hearts.splice(i, 1)[0]); // move recycled heart to the end
    }
  }
}

function drawHeart(x, y, s) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let r = s * 0.05;
    let sx = x + r * 16 * pow(sin(a), 3);
    let sy = y - r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
