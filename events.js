
const rockButtonElement = document.querySelector('#rock-button');

   rockButtonElement.addEventListener('click', () => {
        gamePlayerMove('Rock');

    })
const PaperButtonElement = document.querySelector('#paper-button');    
      
    PaperButtonElement.addEventListener('click', () => {
        gamePlayerMove('Paper');

    })
const scissorButtonElement = document.querySelector('#scissors-button');    
      
    scissorButtonElement.addEventListener('click', () => {
        gamePlayerMove('Scissors');

    })    