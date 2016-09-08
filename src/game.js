function Game(){
    this.cards = new Deck();
    this.board = new Board();
    this.draw = function(){
        this.board.draw();
    };
    this.player = new Player(this);
    this.computer = new Player(this);
    this.playerTurn = (Math.random() < 0.5) ? true : false;
    
    this.update = function(){
        if (this.playerTurn) {
            
        }
    }
}
