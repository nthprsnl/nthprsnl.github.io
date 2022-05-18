function setup() {
    createCanvas(500, 500, WEBGL).parent("cnvs");
}
function draw() {
    background(44, 44, 44);
    strokeWeight(4);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(200);
}
  