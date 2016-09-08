function Card(colour, cost){
  this.colour = colour;
  this.cost = cost;
}

Card.prototype.draw = function(x, y){
    image(images[this.colour], x, y);
    textSize(24);
    fill(255, 255, 0);
    text(this.cost, x + 5, y + 20);
  };