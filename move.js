const score = {
    Wins : 0,
    Losses : 0,
    Ties : 0,
}

function gamePlayerMove(playerMove) {

    const computerMove = pickCompterMove();
    let result ='';

        if(playerMove === 'Rock'){
            if(computerMove === 'Rock'){
                result = 'You Tie';   
            }else if(computerMove === 'Paper'){
                result = 'You Lose'; 
            }else if(computerMove === 'Scissors'){
                result = 'You Win'; 
            }
        
        }else if(playerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You Win';
            }else if(computerMove === 'Paper'){
                result = 'You Tie';
            }else if(computerMove === 'Scissors'){
                result = 'You Lose';
            }
        } else if(playerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                result = 'You Lose';
            }else if(computerMove === 'Paper'){
                result = 'You Win';
            }else if(computerMove === 'Scissors'){
                result = 'You Tie';
            }
        } 

        if (result === 'You Win'){
            score.Wins +=1;
1        }else if (result === 'You Lose'){
            score.Losses +=1;
          }else if (result === 'You Tie'){
            score.Ties +=1;
          }
 alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}.
 Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`); //displays the message in  a pop up

}

function pickCompterMove(){

        let randomNumber = Math.random();
        let computerMove ='';
            if(randomNumber > 0 &&randomNumber <1/3){
            computerMove = 'Rock';
            }else if(randomNumber > 1/3 &&randomNumber <2/3 ){
            computerMove = 'Paper';
            }else if(randomNumber > 2/3 &&randomNumber < 1){
                computerMove = 'Scissors';
            }
            return computerMove;
}
