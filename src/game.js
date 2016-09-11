function Game(){
    this.deck = new Deck([0, 1, 2, 3, 4], [0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.board = new Board();
    this.player = new Player(this);
    this.computer = new Player(this);

    for (var i = 0; i < 5; i++){
        var card1 = this.deck.dealCard();
        var card2 = this.deck.dealCard();
        this.player.addCard(card1);
        this.computer.addCard(card2);
    }

    this.playerTurn = (Math.random() < 0.5) ? true : false;

    this.update = function(){
        if (this.playerTurn) {

        }
    };

    this.draw = function(){
        this.deck.draw();
        // draw player 1's cards
        for (var i = 0; i < this.player.cards.length; i++){
           this.player.cards[i].draw(200 + i * 70, 530);
        }
        // draw player 2's cards
        for (var i = 0; i < this.computer.cards.length; i++){
            this.computer.cards[i].draw(200 + i * 70, 100);
        }
        // draw pics for where cards get played:
        for (var i = 0; i < images.length; i++){
            image(big_images[i], 200 + i * 112, 400 - 54);
        }
    }


}
