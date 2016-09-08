function Stack(colour){
    this.colour = colour;
    this.cards = [];
    this.addCard = function(card){
        this.cards.push(card);
    };
    this.canAdd = function(card){
        return card.colour === this.colour && (this.cards.length === 0 || card.cost >= this.cards[this.cards.length - 1].cost);
    }

    this.draw = function(){

    };
}