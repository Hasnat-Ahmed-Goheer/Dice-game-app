'use strict';
let p=[{
    disCurrScore:document.querySelector('#current--0'),
    distotalScore:document.querySelector('#score--0'),
    totalScore:0
},
{
    disCurrScore:document.querySelector('#current--1'),
    distotalScore:document.querySelector('#score--1'),
    totalScore:0
}
];

let rollDice=document.querySelector('.btn--roll');
let diceImg=document.querySelector('.dice');
let disCurrScore_p1=document.querySelector('#current--1');
let holdScore=document.querySelector('.btn--hold');
let newGameBtn=document.querySelector('.btn--new');
let player=document.querySelectorAll('.player');
let currentScore_p=0;
let diceScore,player_active=0;
let playing=true;

//---------Reseting the player-----------
let reset_player=(player)=>{
    diceScore=0;
    currentScore_p=0;
    player.disCurrScore.textContent=0;
}


// --------switching players--------

let switchPlayer=()=>{
    player[player_active].classList.remove('player--active');
    player[Number(!player_active)].classList.add('player--active');
    reset_player(p[player_active]);
    player_active= Number(!player_active);
// console.log(`Active player is ${player_active}`);
}

//--------Rolling dice and showing img--------

rollDice.addEventListener('click',()=>{
    if (playing)
    {
        diceScore=Math.floor(Math.random()*6+1);
    if (diceScore===1){
        diceImg.src=`dice-1.png`;
        switchPlayer();
    }
    else if(p[0].totalScore<30 && p[1].totalScore<30)
    {
        currentScore_p+=diceScore;
        diceImg.classList.remove('hidden');
        diceImg.src=`dice-${diceScore}.png`;
    p[player_active].disCurrScore.textContent=currentScore_p;
    }
    else{
    playing=false;
    
    }
}
   });

//----------Hold Score Btn----------

holdScore.addEventListener('click',()=>{
   p[player_active].totalScore+=currentScore_p;
   p[player_active].distotalScore.textContent=p[player_active].totalScore;
   currentScore_p=0;
   p[player_active].disCurrScore.textContent=0;
   switchPlayer();
   });

// ---------New Game------------

newGameBtn.addEventListener('click',()=>{
    currentScore_p=0;
    diceScore=0;
    diceImg.classList.add('hidden');
for (let i = 0; i < p.length; i++) {
  
    p[i].disCurrScore.textContent=0;
    p[i].distotalScore.textContent=0;
    p[i].totalScore=0;
   
}
});
