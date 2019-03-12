let cnv, res, p, rand;
let reset = true;
let rCol = false;
let done = false;
let a = [];
let b = [];
let c = [];
let d = [];

const SPEED = 50;


function setup() {
  cnv = createCanvas(windowWidth, windowWidth);
  cnv.mousePressed(msPrsd);
  p = createP("Click above to draw a T-Square fractal");
  res = createButton("Reset");
  res.mousePressed(resPrsd);
  rand = createButton("Random Colors: OFF");
  rand.mousePressed(randCol);
  background(255);
}

function draw() {
  if (done) {
    for (let i = 1; i <= SPEED; i++) {
      let x = a.shift();
      let y = b.shift();
      let w = c.shift();
      let h = d.shift();

      let rC = random(255);
      let gC = random(255);
      let bC = random(255);

      if (rCol) {
        fill(rC, gC, bC);
        noStroke();
      } else {
        fill(0);
        noStroke();
      }

      rectMode(CENTER);
      rect(x, y, w, h);
    }
  }
}

function msPrsd() {
  if (reset) {
    let a = width / 2;
    tsquare(a / 2, a / 2, a + a / 2, a / 2, a + a / 2, a + a / 2, a / 2, a + a / 2, 1);
    rectMode(CENTER);
    fill(0);
    rect(a, a, a, a);
    reset = false;
    done = true;
  }
}

function resPrsd() {
  reset = true;
  background(255);

  a = [];
  b = [];
  c = [];
  d = [];

  done = false;
}

function randCol() {
  rCol = !rCol;
  if (rCol) {
    rand.html("Random Colors: ON");
  } else {
    rand.html("Random Colors: OFF");
  }
}

function tsquare(x1,y1,x2,y2,x3,y3,x4,y4,lvl) {
  let a = abs(x1 - x2);
  let n = lvl;
  let h = a / 2.0;

  if (n < 9) {
    saveRect(x1, y1, h, h);
    saveRect(x2, y2, h, h);
    saveRect(x3, y3, h, h);
    saveRect(x4, y4, h, h);

    h = h / 2;

    tsquare(x1 - h, y1 - h, x1 + h, y1 - h, x1 + h, y1 + h, x1 - h, y1 + h, n + 1);
    tsquare(x2 - h, y2 - h, x2 + h, y2 - h, x2 + h, y2 + h, x2 - h, y2 + h, n + 1);
    tsquare(x3 - h, y3 - h, x3 + h, y3 - h, x3 + h, y3 + h, x3 - h, y3 + h, n + 1);
    tsquare(x4 - h, y4 - h, x4 + h, y4 - h, x4 + h, y4 + h, x4 - h, y4 + h, n + 1);
  }
}

function saveRect(x, y, w, h) {
  a.push(x);
  b.push(y);
  c.push(w);
  d.push(h);
}
