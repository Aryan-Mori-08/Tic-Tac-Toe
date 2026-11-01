let box = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset-btn");
let winner = document.querySelector("#winner");
let newGameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let turn0 = true;



const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetGame = () =>{
    msgContainer.classList.add("hide");
    turn0 = true;
    for(let btn of box){
        btn.innerText = "";
        btn.disabled = false;
    }
}


const checkWinner = () =>{
    for(pattern of winningPatterns){
        let p1 = box[pattern[0]].innerText;
        let p2 = box[pattern[1]].innerText;
        let p3 = box[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                // console.log(`winner is ${p1}`);
                winner.innerText = `winner is ${p1}`;
                msgContainer.classList.remove("hide");
                disableBoxes();
                // showWinner();
                // box.disabled = true;
            }
        }
    }
}

const disableBoxes = () =>{
    for(let btn of box){
        btn.disabled =true;
    }
}

// const showWinner = () =>{
//     winner.innerText = `winner is ${p1}`;
//     msgContainer.classList.remove("hide");

// }



for(let btn of box){
    btn.addEventListener("click", ()=>{
        if(turn0){
            btn.innerText = "O";
            turn0 = false;
            
        }else{
            btn.innerText = "X";
            turn0 = true;
            
        }
        btn.disabled = true;
        checkWinner();
    })
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
