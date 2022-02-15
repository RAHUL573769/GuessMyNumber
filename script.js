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


document.querySelector('.check').addEventListener('click',function(){
    const guess=parseInt(document.querySelector('.guess').value);
    console.log(typeof(guess));

    if(!guess){
        document.querySelector('.message').textContent="No Number";
    }
})