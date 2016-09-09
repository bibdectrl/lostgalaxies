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

Deck.prototype.dealCard = function(){
  var card = this.cards.pop();
  return card;
}

Deck.prototype.draw = function(){
  fill(100);
  rect(200, 200, 60, 80);
  fill(255);
  textSize(12);
  text("DECK", 213, 240);
}
