let score = JSON.parse(localStorage.getItem('score'));
if (!score){
  score = {Wins :0,
           Losses :0,
           Ties :0};
}

 // here the function compares the playermove to the computermove and updates the the score object and then display the result ,move comparison and scores.
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
// using the if statement we compare results to update results according to wins ,losses and ties.

        if (result === 'You Win'){
            score.Wins +=1;
         }else if (result === 'You Lose'){
            score.Losses +=1;
          }else if (result === 'You Tie'){
            score.Ties +=1;
          }

          localStorage.setItem('score', JSON.stringify(score));

          const resetButtonElement = document.querySelector('#Reset-scores');

        resetButtonElement.addEventListener ('click', () =>{

            score.Wins = 0;
            score.Losses = 0;
            score.Ties = 0
        })

// here the scores are updated to the  paragraph ,I used the queryselector to find the classes of the paragraph then through .innerHTML property to attach the result,move comparison and scores.

            const resultElement = document.querySelector('.results'); 
                resultElement.innerHTML =`${result}`;
                
            const moveComparisonElement = document.querySelector('.move-comparison');  
                    moveComparisonElement.innerHTML =`You picked ${playerMove}.Computer picked ${computerMove}`; 

            const scoreElement = document.querySelector('.scores');
                    scoreElement.innerHTML =`Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
}
// In this function below computer picks  a random number that is between 0 and 1 using the math.random() function then attaches it to a move according to the random number obtained and finally returns the move.
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
