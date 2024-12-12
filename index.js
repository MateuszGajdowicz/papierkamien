let MovePlayer = document.querySelector('.movePlayer');
let MoveBot = document.querySelector('.moveBot');
let PlayerScore = document.getElementById('h2player');
let BotScore = document.getElementById('h2bot');
let Victory = document.querySelector('.Victory');

let randomChoice;
let randomIndex;
function GenerateRandom(){
    let Choices = ['✋🏿','👊🏿','✌🏿'];
    const randomIndex = Math.floor(Math.random()*Choices.length);
    randomChoice = Choices[randomIndex];
}
function CheckVictory(){
    if(parseInt(PlayerScore.textContent)===3){
        Victory.textContent='Wygrałeś!';
        BotScore.textContent=0;
        PlayerScore.textContent=0;
    }
    else if(parseInt(BotScore.textContent)===3){
        Victory.textContent='Przegrałeś!';
        BotScore.textContent=0;
        PlayerScore.textContent=0;
    }
}
function CheckMoves(){
    if(MoveBot.textContent===MovePlayer.textContent){
    }
    else {
        switch(MovePlayer.textContent){
            case '✋🏿':
                MoveBot.textContent==='👊🏿'? PlayerScore.textContent++ : BotScore.textContent++;
                break;
            case '👊🏿'  :
                MoveBot.textContent==='✌🏿' ? PlayerScore.textContent++ : BotScore.textContent++;     
                break;
            case '✌🏿' : 
                MoveBot.textContent=== '✋🏿'? PlayerScore.textContent++ : BotScore.textContent++;     
                break;
        }
    }
    CheckVictory();



}
function MovePaper(){
    MovePlayer.textContent='✋🏿';
    GenerateRandom();
    MoveBot.textContent = randomChoice;
    CheckMoves();
}
function MoveRock(){
    MovePlayer.textContent='👊🏿';
    GenerateRandom();
    MoveBot.textContent = randomChoice;
    CheckMoves();
    
}
function MoveScissors(){
    MovePlayer.textContent='✌🏿';
    GenerateRandom();
    MoveBot.textContent = randomChoice;
    CheckMoves();
}
