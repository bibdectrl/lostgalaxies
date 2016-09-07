function Board(){
    this.width = 800;
    this.height = 600;
    this.cards = new Deck();
    this.stacks = [new Stack("red"), new Stack("blue")];
    this.draw = function(){
        // draw board background
        // draw deck
        // draw each stack
    }
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
  
}