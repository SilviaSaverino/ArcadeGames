const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');

/**makes the character jump*/
function jump(){
    if(player.classList != 'up'){
        player.classList.add('up');
    }
    setTimeout(function(){
        player.classList.remove('up');
    },500);
}

/** check for collision every 15mSec*/

var checkCollision = setInterval(function() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));

    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstacleLeft < 20 && obstacle.Left > 0 && player >= 130){
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('collision');
    }
   
 
 }, 10);
