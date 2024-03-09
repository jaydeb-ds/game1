let bt=document.querySelector("#btn");
let currentMode="light";
let  mode = document.querySelector("body")

bt.addEventListener("click", ()=>{
    if (currentMode=== "light") {
        currentMode="dark";
      mode.classList.add("dark");
      mode.classList.remove("light")

        
    } else {

        currentMode="light";
        document.querySelector("body").classList.add("light");
        mode.classList.remove("dark");
    }
    console.log(currentMode);
});

let userScore = 0, compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const playGame =(userChoice)=>{
    console.log(" user choice ",userChoice);
    const CompChoice=genCompChoice();
    console.log("computer choice",CompChoice);
    if(userChoice===CompChoice){
        console.log("draw");
        msg.innerText="draw"
    }else{
        let userWin = true;
        if (userChoice==="rock") {
                userWin = compScore === "paper"? false : true;           
        } 
        else if(userChoice==="paper"){
            userWin = compScore ==="scissor" ? false : true;
        }
        else {
            userWin= CompChoice==="rock"? false :true;
        }
        showWinner(userWin);
    }
};
const showWinner =(userWin)=>{
    if (userWin) {
                userScore++;
                userScorePara.innerText= userScore;
                    console.log("you win"); 
                    msg.innerText=(" you win!")  
    } else {
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you loss");
        msg.innerText=("you loss")
    }
}

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randInx= Math.floor(Math.random()*3);
    return options[randInx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{

        userChoice=choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choise was click",userChoice);

    });

});