
 var startSound = document.querySelector('#start');
 var stars=document.querySelector('.stars');
 var mountains=document.querySelector('.back');
 var text=document.querySelector('.text');
 var mountainsb=document.querySelector('.front');;


startSound.currentTime = 0;
startSound.play();
startSound.muted = false;
 window.addEventListener('scroll',function(){
     var value= window.scrollY;
     console.log(value);

     stars.style.left= value * 0.25 + 'px' ;
    //  moon.style.top=value * 1.25 + 'px';
     mountains.style.top=  value * 0.5 + 'px';
     mountainsb.style.top= value * 0 + 'px';
     text.style.marginRight= value * 4 +'px';
     //adding button

 });