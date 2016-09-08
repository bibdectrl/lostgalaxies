function Player(){
    this.cards = [];
    this.stacks = [new Stack(0), new Stack(1), new Stack(2), new Stack(3), new Stack(4)];
    this.score = function(){
       var score = 0;
       for (var i = 0; i < this.stacks.length; i++){
         if (this.stacks[i].length > 0){
            var mult = 1;
            var tempScore = -20;
            for (var j = 0; j < this.stacks[j].cards.length; j++){
              var cost = this.stacks[i].cards[j].cost;
              if (cost === 0){
                mult++;
              }
              else {
                tempScore += cost;
              }
            }
            tempScore *= mult;
            score += tempScore;
         }
       }
       return score;
    };
    this.draw = function(){
      //draw stacks
      //draw hand
    }
}