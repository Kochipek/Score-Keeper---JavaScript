// selecting scores for each player
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
// selecting buttons and selector
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')
const winNumber = document.querySelector('#winNumber')
//setting up counters
let winningScore = 3; 
let counterp1 = 0;
let counterp2 = 0;
let gameOver = false;
//button for player 1
p1Button.addEventListener('click',() => {
    if(!gameOver) {
        counterp1 ++;
         if(counterp1 === winningScore){
            gameOver = true;
            p1.classList.add('winner')
            p2.classList.add('loser')
        }
        p1.textContent = counterp1;
    }
})
//button for player 2
p2Button.addEventListener('click', () => {
    // each counters stop when one of hits the winning score
    if(!gameOver){
        counterp2++;
        // if no one reach the winning score continue until one does
        if(counterp2 === winningScore){
            gameOver = true;
            p2.classList.add('winner')
            p1.classList.add('loser')
        }
        p2.textContent = counterp2;

    }
})
winNumber.addEventListener('change', function(){
//!we need numbers not strings
winningScore = parseInt(this.value) 

//using reset function as a callback
resetSelector();
})


// reseting selector
function resetSelector(){
    gameOver = false;
    counterp1 = 0;
    counterp2 = 0;
   p1.textContent = 0;
   p2.textContent = 0;
   p1.classList.remove('winner', 'loser')
   p2.classList.remove('winner', 'loser')
}
//reset button

function resetforButton() {
    gameOver = false;
    counterp1 = 0;
    counterp2 = 0;
   p1.textContent = 0;
   p2.textContent = 0;
   winNumber.value = '';
   p1.classList.remove('winner', 'loser')
   p2.classList.remove('winner', 'loser')

}

resetButton.addEventListener('click', resetforButton)


