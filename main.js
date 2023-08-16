var NoseX =0;
var img= "";
var NoseY=0;
var marioX=325;
var marioY=325;

function setUp() {
    var canva=createCanvas(1240 , 340);
    canva.parent('canvas');
     instialize(mario);

     var video = createCapture(VIDEO);
     video.size(800,400)
     video.parent('gameConsole');
}

function preload() {
    img=loadImage("mario.jpeg");
    setSprites();
    marioAnimation();
}

function draw() {
    game();
}

function modelLoaded(console, error) {
    console.log("modelo carregado");
}


