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

const secretNumber=parseInt(Math.trunc(Math.random()*20));
// console.log(typeof(secretNumber));
document.querySelector(".number").innerHTML=secretNumber;
let score=20;
document.querySelector('.check').addEventListener('click',function(){
    const guess=parseInt(document.querySelector('.guess').value);
    // console.log((guess));

    if(!guess){
        document.querySelector('.message').textContent="No Number";
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent="You Have Won The Game";
        
    }
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
})