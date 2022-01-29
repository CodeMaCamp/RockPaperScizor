function computerPlay(){
  let ran = Math.ceil( Math.random()*3);
    if(ran==1){
        return "rock";
    }else if(ran==2){
        return "paper";
    }else if (ran ==3){
        return "scizor";
    }else{
        return "weird thing happened with math.random";
    }
}
function round(plySel, comSel){
    plySel = plySel.toLowerCase();
    comSel = comSel.toLowerCase();
    if(plySel=="rock"){
        if(comSel=="rock"){
            return "Tie";
        }else if(comSel=="paper"){
            return "You Lose";
        }else if(comSel=="scizor"){
            return "You Win";
        }else{
            return "Wrong Input";
        }
    }
    if(plySel=="paper"){
        if(comSel=="rock"){
            return "You Win";
        }else if(comSel=="paper"){
            return "Tie";
        }else if(comSel=="scizor"){
            return "You Lose";
        }else{
            return "Wrong Input";
        }
    }
    if(plySel=="scizor"){
        if(comSel=="rock"){
            return "You Lose";
        }else if(comSel=="paper"){
            return "You Win";
        }else if(comSel=="scizor"){
            return "Tie";
        }else{
            return "Wrong Input";
        }
    }else{
        return "wrong input";
    }
}
function game(){
    let count = 0;
    let score = 0;
    do{
        let  plySel = String(prompt("Type your hand, Rock - Paper - Scizor"));
        let comSel = computerPlay();
        console.log(round(plySel,comSel));
        if(round(plySel,comSel)=="wrong input"){
            count--;
        }
        if(round(plySel,comSel)=="You Win"){
            score++;
        }if(round(plySel,comSel)=="You Lose"){
            score--;
        }
        count++;
    }while(count<5);
    if(score>0){
        console.log("You Won In The Five Rounds");
        return;
    }else if(score<0){
        console.log("You Lost In The Five Rounds");
        return;
    }else{
        console.log("You Tied In The Five Rounds");
        return;
    }
}

game();