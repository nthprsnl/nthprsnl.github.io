console.log("click.js loaded");
function clickButton() {
    console.log("click");
    var click = new Audio();
    click.src = "/assets/sounds/click.mp3";
    click.play();
}