let like=document.querySelector('#like');
let image=document.querySelector('img');

image.addEventListener('dblclick',function(){
    like.style.opacity=1;
    like.style.transform='translate(-50%,-50%)scale(1.5)rotate(0deg)'

    setTimeout(() => {
         like.style.transform='translate(-50%,-320%)scale(1.5) rotate(60deg)'
    }, 800);

// After 0.8 seconds, the like element moves upwards (translate(-50%, -320%)) and rotates 60deg while keeping its enlarged size (scale(1.5))


    setTimeout(() => {
        like.style.opacity=0;
    },1000 );

    //After 1 second, the like element fades out (opacity = 0).


    setTimeout(function () {
        like.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200)

    //After 1.2 seconds, the like element resets:
// Moves back to center (-50%, -50%)
// Shrinks to invisible (scale(0))
// Rotates to -60deg

})