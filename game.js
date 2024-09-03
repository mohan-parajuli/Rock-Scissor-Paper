let userscore = 0;
let compscore = 0;

const choicess = document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const usernumber=document.querySelector("#unum");
const compnumber=document.querySelector("#cnum");

const draw = () => {
    message.innerText="Its Draw! Play Again"
}
const gencomp = () => {
    let option = ["rock", "scissor", "paper"]
    const ranid = Math.floor(Math.random() * 3);
    return option[ranid];
}

const showwinner=(userwin)=>{
    if(userwin==true){
        userscore++;
        usernumber.innerText=userscore;
        message.innerText="You Win!!!";
        message.style.backgroundColor="green";
    }
    else{
        compscore++;
        compnumber.innerText=compscore;
        message.innerText="You lose!"
        message.style.backgroundColor="red";
    }
}




const playgame = (userchoice) => {
    console.log("userclicked:", userchoice)

    const compchoice = gencomp();
    console.log("comp click:", compchoice);

    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            //scissor, paper
          userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="scissor"){
            //rock paper
            userwin=compchoice=="rock"?false:true;
        }
        else{
            userwin=compchoice=="scissor"?false:true;
        }
        showwinner(userwin);
    }
}

choicess.forEach((item) => {
    item.addEventListener("click", () => {
        const userchoice = item.getAttribute("id");
        // console.log(userchoice);
        playgame(userchoice);
    })
});