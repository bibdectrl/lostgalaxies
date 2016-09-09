var canvas;
var game;
var pressed;
var images;

function setup(){
    canvas = createCanvas(1200, 800);
    game = new Game();
    background(0, 255, 0);
    images = [loadImage("res/bluewithstars_base.png"), 
              loadImage("res/brownwithstars_base.png"), 
              loadImage("res/greenwithstars_base.png"), 
              loadImage("res/purplewithstars_base.png"), 
              loadImage("res/redwithstars_base.png"), 
    ];
    big_images = [loadImage("res/bluewithstars_big.png"), 
              loadImage("res/brownwithstars_big.png"), 
              loadImage("res/greenwithstars_big.png"), 
              loadImage("res/purplewithstars_big.png"), 
              loadImage("res/redwithstars_big.png"), 
    ];
}

function draw(){
    game.draw();
    if (mouseIsPressed && ! pressed){
        pressed = true;
        var x = mouseX;
        var y = mouseY;
        // select card
    } else if (pressed && ! mouseIsPressed){
        pressed = false;
    }
}