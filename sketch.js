let cnv, res, p;
let reset = true;

function setup() {
  cnv = createCanvas(windowWidth, windowWidth);
  cnv.mousePressed(msPrsd);
  p = createP("Click above to draw a T-Square fractal");
  res = createButton("Reset");
  res.mousePressed(resPrsd);
  background(255);
}

function draw() {

}

function msPrsd() {
  if (reset) {
    let a = width / 2;
    tsquare(a / 2, a / 2, a + a / 2, a / 2, a + a / 2, a + a / 2, a / 2, a + a / 2, 1);
    rectMode(CENTER);
    fill(0);
    rect(a, a, a, a);
    reset = false;
  }
}

function resPrsd() {
  reset = true;
  background(255);
}

function tsquare(x1,y1,x2,y2,x3,y3,x4,y4,lvl) {
  let a = abs(x1 - x2);
  let n = lvl;
  let h = a / 2.0;

  if (n < 9) {
    rectMode(CENTER);
    fill(0);
    stroke(0);
    rect(x1, y1, h, h);
    rect(x2, y2, h, h);
    rect(x3, y3, h, h);
    rect(x4, y4, h, h);

    h = h / 2;

    tsquare(x1 - h, y1 - h, x1 + h, y1 - h, x1 + h, y1 + h, x1 - h, y1 + h, n + 1);
    tsquare(x2 - h, y2 - h, x2 + h, y2 - h, x2 + h, y2 + h, x2 - h, y2 + h, n + 1);
    tsquare(x3 - h, y3 - h, x3 + h, y3 - h, x3 + h, y3 + h, x3 - h, y3 + h, n + 1);
    tsquare(x4 - h, y4 - h, x4 + h, y4 - h, x4 + h, y4 + h, x4 - h, y4 + h, n + 1);
  }
}
