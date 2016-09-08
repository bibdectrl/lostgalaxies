var canvas;
var deck;
var rendererer;
var pressed;
var images;
var testCard;

function setup(){
    canvas = createCanvas(1200, 800);
    deck = new Deck([0, 1, 2, 3, 4], [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    background(0, 255, 0);
    images = [loadImage("res/bluewithstars_base.png"), 
              loadImage("res/brownwithstars_base.png"), 
              loadImage("res/greenwithstars_base.png"), 
              loadImage("res/purplewithstars_base.png"), 
              loadImage("res/redwithstars_base.png"), 
    ];
    testCard = new Card(0, 5);

    
}

function draw(){
    deck.show();
    if (mouseIsPressed && ! pressed){
        pressed = true;
        var x = mouseX;
        var y = mouseY;
        // select card
    } else if (pressed && ! mouseIsPressed){
        pressed = false;
    }
}