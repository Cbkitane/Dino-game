var character = document.getElementById('character');
var obstacle = document.getElementById('obstacle');

var loseMsg = document.getElementById('lose-msg');

var restartBtn = document.getElementById('btn-restart');

var isGameOver = false;

var currentScore = document.getElementById('currentScore');

var highScore = document.getElementById('highScore');

restartBtn.addEventListener('click', function(){
    window.location.reload();
})

document.addEventListener('keyup', event => {
    if(event.keyCode === 32){
        character.classList.add('jump');
        setTimeout(() =>{
            character.classList.remove('jump');
        }, 300)
    }
})

var counter = 0;

highScore.innerHTML = localStorage.getItem('highScore');

let isAlive = setInterval(() => {
    highScore.innerHTML = localStorage.getItem('highScore');

    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));

    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstacleLeft <= 90 && obstacleLeft >= 40 && characterBottom <= 75 ){
        obstacle.style.left = obstacleLeft + "px";
        obstacle.style.animation = 'none';
        character.style.bottom = characterBottom + "px";
        character.style.animation = 'none';
        loseMsg.style.display = 'block';
    }else{
        currentScore.innerHTML = counter++;

        if(parseInt(currentScore.innerHTML) >= parseInt(highScore.innerHTML)){
            highScore.innerHTML = parseInt(currentScore.innerHTML);
            var highestScore = parseInt(highScore.innerHTML);
            localStorage.getItem('highScore', highestScore);
        }
        
    }
    
})
