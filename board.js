function Board(){
    this.width = 800;
    this.height = 600;
    this.cards = new Deck();
    this.stacks = [new Stack("red"), new Stack("blue")];
    this.draw = function(){
        // draw board background
        // draw deck
        // draw each stack
    };
}

function Game(){
    this.board = new Board();
    this.draw = function(){
        this.board.draw();
    };
}

function Stack(colour){
    this.colour = colour;
    this.cards = [];
    this.addCard = function(card){
        this.cards.push(card);
    };
    this.removeCard = function(){
        return this.cards.pop();
    };
    this.canAdd = function(card){
        return card.colour === this.colour && card.value >= this.cards[this.cards.length - 1].value || this.cards.length === 0;
    }
    
    this.draw = function(){
        
    };
}

function Card(colour, cost){
  this.colour = colour;
  this.cost = cost;
}	

function CardRenderer(deck){
  this.deck = deck;
}

CardRenderer.prototype.show = function(){
  
}

function Deck(firstVals, secondVals){
  this.cards = [];
  for (var i = 0; i < firstVals.length; i++){
   for (var j = 0; j < secondVals.length; j++){
     var card = new Card(firstVals[i], secondVals[j]);
     this.cards.push(card);
   }
  }
  this.shuffle();
}

Deck.prototype.shuffle = function(){
  for (var i = 0; i < this.cards.length; i++){
    var idx = Math.floor(Math.random() * i);
    var tmp = this.cards[i];
    this.cards[i] = this.cards[idx];
    this.cards[idx] = tmp;
  }
}

Deck.prototype.show = function(){
  fill(100);
  rect(200, 200, 60, 80);
  fill(255);
  text("DECK", 213, 240);
  for (var i = 0; i < 10; i++){
      fill(40);
      rect(200 + i * 70, 330, 60, 80);
      // choose colour based on colour property of card
      fill(255,0,0);
      text(this.cards[i].colour, 210 + i * 70, 350);
      text(this.cards[i].cost, 210 + i * 70, 380);
  }
}

var canvas;
var deck;
var rendererer;
var pressed;

function setup(){
    canvas = createCanvas(1200, 800);
    deck = new Deck([1, 2, 3, 4, 5], [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    background(0, 255, 0);
    pressed = false;
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