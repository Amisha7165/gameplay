score = 0;
cross= true;
document.onkeydown = function(e){
    console.log("key code is ", e.keycode)
    if(e.keycode===38){
        itachi = document.querySelector('.itachi')
        itachi.classlist.add('animateditachi');
        setTimeout(() => {
            itachi.classlist.remove('animateitachi')
        }, 700);
    }

if(e.keycode===39){
    itachi = document.querySelector('.itachi')
    itachiX = parseInt(window.getComputedStyle(itachi, null).getPropertyValue('left'));
    itachi.style.left = itachiX + 112 + "px";
}
}

if(e.keycode===37){
    itachi = document.querySelector('.itachi')
    itachiX = parseInt(window.getComputedStyle(itachi, null).getPropertyValue('left'));
    itachi.style.left = (itachiX - 112) + "px";
}


setInterval(() => {
    itachi = document.querySelector('.itachi')
    gameover = document.querySelector('.gameover')
    obstacle = document.querySelector('.obstacle')
    ix = parseInt(window.getComputedStyle(itachi, null).getPropertyValue('left'));
    iy = parseInt(window.getComputedStyle(itachi,null).getPropertyValue('top'));


    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle('obstacle,null').getPropertyValue('top'));
    offsetX = Math.abs(ix-ox);
    offsetY = Math.abs(iy-oy);
    if (offsetX< 114 && offsetY <53){
        gameover.style.visibility = 'visible';
        obstacle.classlist.remove('obstacleAni')
    }
    else if (offsetX <144 && cross){
        score+=1;
        updatescore(score);
        cross= false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            
        }, 500);
        aniDur =parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.5;
        obstacle.style.animationDuration = newDur + 's';
    }

}, 100);
function updatescore(score){
    ScoreCont.innerHTML = "your score: "+score
}