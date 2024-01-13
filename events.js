// through the querySelector method we get the id's and through the event listeners we listen to mouse events then carry out the function involving the button clicked.
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
