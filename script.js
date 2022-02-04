var plySel = "",
    comSel = "",
    score = 0,
    count = 0;
function computerPlay() {
  let ran = Math.ceil(Math.random() * 3);
  if (ran == 1) {
    return "rock";
  } else if (ran == 2) {
    return "paper";
  } else if (ran == 3) {
    return "scizor";
  } else {
    return "weird thing happened with math.random";
  }
}
function round(plySel, comSel) {
  plySel = plySel.toLowerCase();
  comSel = comSel.toLowerCase();
  if (plySel == "rock") {
    if (comSel == "rock") {
      return "Tie";
    } else if (comSel == "paper") {
      return "You Lose";
    } else if (comSel == "scizor") {
      return "You Win";
    } else {
      return "Wrong Input";
    }
  }
  if (plySel == "paper") {
    if (comSel == "rock") {
      return "You Win";
    } else if (comSel == "paper") {
      return "Tie";
    } else if (comSel == "scizor") {
      return "You Lose";
    } else {
      return "Wrong Input";
    }
  }
  if (plySel == "scizor") {
    if (comSel == "rock") {
      return "You Lose";
    } else if (comSel == "paper") {
      return "You Win";
    } else if (comSel == "scizor") {
      return "Tie";
    } else {
      return "Wrong Input";
    }
  } else {
    return "wrong input";
  }
}
function playerPlay(string) {
  plySel = document.getElementById(string).value;
  comSel = computerPlay();
  console.log(plySel + " " + score+' '+ count+" "+ round(plySel, comSel));
  game();
}
function game() {
  if (count < 5) {
    console.log(round(plySel, comSel));
    if (round(plySel, comSel) == "wrong input") {
      count--;
    }
    if (round(plySel, comSel) == "You Win") {
      score++;
      document.getElementById("result").innerHTML = "Computer played .... " + comSel.toUpperCase() + "<br> You played .... " + plySel.toUpperCase() + "<br> Therefore You Won this round";
    }
    if (round(plySel, comSel) == "You Lose") {
      score--;
      document.getElementById("result").innerHTML = "Computer played .... " + comSel.toUpperCase() + "<br> You played .... " + plySel.toUpperCase() + "<br> Therefore You lost this round";
    }if(round(plySel,comSel) == "Tie"){
      document.getElementById("result").innerHTML = "Computer played .... " + comSel.toUpperCase() + "<br> You played .... " + plySel.toUpperCase() + "<br> Therefore You Tied this round";
    }
    count++;
  } else if(count==5) {
    if (score > 0) {
      document.getElementById("result").innerHTML = "YOU WON THE GAME!";
      document.getElementById("reldGame").innerHTML = "<button id='gm-btn' onclick='location.reload()'> Reload Game</button>"
      score=0;
      count=0;
      return;
    } else if (score < 0) {
      document.getElementById("result").innerHTML = "YOU LOST THE GAME!";
      document.getElementById("reldGame").innerHTML = "<button id='gm-btn' onclick='location.reload()'> Reload Game</button>"
      score=0;
      count=0;
      return;
    } else {
      document.getElementById("result").innerHTML = "YOU TIED THE GAME!";
      document.getElementById("reldGame").innerHTML = "<button id='gm-btn' onclick='location.reload()'> Reload Game</button>"
      //document.body.style.backgroundImage:URL('https://images.saatchiart.com/saatchi/1028376/art/5930389/5000183-HSC00001-7.jpg');
      score=0;
      count=0;
      return;
    }
  }else{
    return;
  }
}

