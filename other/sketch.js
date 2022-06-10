function setup() {
    createCanvas(300, 300, WEBGL).parent("cube");
}
function draw() {
    background(51,51,51);
    strokeWeight(4);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(150);
}
