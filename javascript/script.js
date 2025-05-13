
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("Game was draw.  Play again!");
    msg.innerText="Game was draw.  Play again!";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText= userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText= compScore;
        console.log("You Lose");
        msg.innerText=`You Lose.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userwin=true;
        if(userChoice ==="rock"){
            //scissors,paper
            userwin=compChoice==="scissors"? true:false;
        }else if(userChoice==="paper"){
            //rock,scissors
            userwin=compChoice==="rock"?true:false;
        }else {
            //rock,paper
           userwin= compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    
    });
});
    