'use strict';

// const a=document.querySelector('.message').textContent
// console.log(a);

// document.getElementById.querySelector('score').textContent

// console.log(document.getElementById.querySelector('score'));

// let b=document.querySelector('.score');

// b.textContent='13';

// document.querySelector('.number').innerHTML='13';
// document.querySelector('.guess').value='23';

// console.log(document.querySelector('.number').innerHTML);

let  secretNumber=parseInt(Math.trunc(Math.random()*20));
// console.log(typeof(secretNumber));
document.querySelector(".number").innerHTML=secretNumber;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=parseInt(document.querySelector('.guess').value);
    // console.log((guess));

    if(!guess){
        document.querySelector('.message').textContent="No Number";
    }
    //When there is no input
    else if(guess===secretNumber){
        document.querySelector('.message').textContent="You Have Won The Game";
        document.querySelector('body').style.backgroundColor=" #60b347";
        document.querySelector('.number').style.width='30rem';
    if(score>highScore){
        highScore=score;
        document.querySelector(".highscore").innerHTML=highScore;
    }
    
    }
    //When player wins
    else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Higher Guess";
            score--;
            document.querySelector('.score').innerHTML=score;
        }
        else{
            score--;
            document.querySelector('.message').innerHTML="You have Lost"; 
        }
        
    }
    //When score is greater
    else if(guess<secretNumber){

        if(score>1){
            document.querySelector('.message').textContent="Lower Guess";
            score--;
            document.querySelector('.score').innerHTML=score;
        }
        else{
            score--;
            document.querySelector('.message').innerHTML="You have Lost"; 
        }





      

    }
    //When score is lesser
})

document.querySelector('.again').addEventListener('click',function(){
    // console.log("clicked");

score=20;
    secretNumber=parseInt(Math.trunc(Math.random()*20));

    document.querySelector('.message').textContent="Start guessing...";
    secretNumber=0;
    document.querySelector(".number").innerHTML='?';
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor=" #222";
    document.querySelector('.number').style.width='15rem';
    document.querySelector(".highscore").innerHTML=0;

})