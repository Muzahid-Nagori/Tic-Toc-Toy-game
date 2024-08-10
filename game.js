let boxes  = document.querySelectorAll('.box')
let resetbtn =  document.querySelector('.btn2')
let newbtn =  document.querySelector('.btn1')
let msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let player1 = prompt("enter name first player (0);");
let player2 = prompt("enter name second player (x);");
let currentplayer = player1;
let  turn0 = true;


let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetgame = () =>  {
turn0 = true;
currentplayer = player1;

msgcontainer.classList.add('hide')

inabledbox();
}
const newgame = () =>  {
    turn0 = true;
    currentplayer = player1;
    inabledbox();
msgcontainer.classList.add('hide')
resetbtn.style.display = 'inline-block';

    }

boxes.forEach((box) => {
box.addEventListener("click", () =>{
    if(turn0){
        box.innerText = "0"
        turn0 = false;
        currentplayer = player1; 
    }
    else{
        box.innerText = "X"
        turn0 = true;
        currentplayer = player2; 

    }
    box.disabled = true;

    checkwinner();

});
});


const showinnner = (winner) => {
    msg.innerText = `Congratulations ${winner}, you are the winner!`;
    msgcontainer.classList.remove('hide');
    resetbtn.style.display = 'none';
}

const checkwinner = () => {
    for(  let pattern of winpatterns){
        
let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val  != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner")
        showinnner(currentplayer);
disabledbox ();

    }
}
    }
}

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;

    }
    
}

const inabledbox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
    
}

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click",newgame);


