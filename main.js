var score1, score2, currScore, currPlayer, dice,dice1, gameRunning,target=20;
score1 = score2 = currScore = 0;
currPlayer = 1;
gameRunning = true;
document.querySelector('.dice').style.display = 'none';
dice1=-1;
function changePlayer() {
    currScore = 0;
    dice1=-1;
    document.querySelector('#current-' + currPlayer).textContent = 0;
    document.querySelector('.player' + currPlayer).classList.remove('active');
    currPlayer = (currPlayer === 1) ? 2 : 1;
    document.querySelector('.player' + currPlayer).classList.add('active');
}
function newGame()
{
    score1 = score2 = currScore = 0;
    target=20;
    currPlayer = 1;
    dice1=-1;
    gameRunning=true;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-2').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.querySelector('#name1').innerHTML = "Player 1 ";
    document.querySelector('#name2').innerHTML = "Player 2 ";
    document.querySelector('.player' + currPlayer).classList.remove('winner');
    document.querySelector('.player' + currPlayer).classList.remove('winner');
    document.querySelector('.player1').classList.remove('active');
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.player1').classList.add('active');
    var tmp = prompt("Choose the Winning Score(Default Value is 20)");
    if(tmp)
    {
        target=parseInt(tmp);
       // alert(target);
    }

}
newGame();
//DICE ROLLING PIC EBONG CURRENT SCORE UPDATE
document.querySelector('.btn-roll').onclick = function () {
    if (gameRunning) {
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            if (dice===6)
            {
                if(dice1===-1)
                dice1=6;
                else{
                    changePlayer();
                    return;
                    
                }
            }
            else
            dice1=-1;
            currScore += dice;
            document.querySelector('#current-' + currPlayer).textContent = currScore;
            var currBest = parseInt(document.querySelector("#score-" + currPlayer).textContent);
            if ((currScore + currBest) >= target) {
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('#name' + currPlayer).innerHTML = "WINNER!";
                document.querySelector('.player' + currPlayer).classList.add('winner');
                document.querySelector('.player' + currPlayer).classList.remove('active');
                gameRunning=false;

            }
        } 
        else {
            changePlayer();
        }
    }
    else{
        alert("This round already Have a Winner..Please Start a new game for continue playing. :) ")
    }
}
//STARTS A NEW GAME
document.querySelector('.btn-new').onclick = function () {
    newGame();
}

//HOLD
document.querySelector('.btn-hold').onclick = function () {
    if (gameRunning) {
        dice1=-1;
        var currBest = document.querySelector("#score-" + currPlayer).textContent;
        document.querySelector("#score-" + currPlayer).textContent = parseInt(currBest) + currScore;
        changePlayer();
    }
    else{
        alert("This round already Have a Winner..Please Start a new game to continue playing. :) ")
    }
}