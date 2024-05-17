
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");
let imgSelected = document.getElementById('img-selected');
let cpuSelected = document.getElementById('cpu-selected');
let userPoints = document.getElementById('user-points');
let cpuPoints = document.getElementById('cpu-points');
let gameResult = document.getElementById('h3-result');
    
let userSelect = 0;
let cpuSelect = 0;

let userPoint = 0;
let cpuPoint = 0;
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    btnRock.addEventListener('click', ()=> {
        imgSelected.src = "assets/Rock.jpeg";
        userSelect = 1;
        turnCpu();
        calculatePoints();
        finalScore();   
      });
      btnPaper.addEventListener('click', ()=> {
        imgSelected.src = "assets/paper.jpeg";
        userSelect = 2;
        turnCpu();
        calculatePoints();
        finalScore();   
      });
      btnScissors.addEventListener('click', ()=> {
        imgSelected.src = "assets/scissors.jpeg";
        userSelect = 3;
        turnCpu();
        calculatePoints();
        finalScore();   
      });

      cpuSelected.addEventListener('click', ()=> {
        imgSelected.src = "assets/scissors.jpeg";
        cpuSelect = 0;
        turnCpu();
        calculatePoints();
        finalScore();   
      });

     
      function turnCpu() {
        let turn = random(1,3);
        if (turn === 1) {
          cpuSelected.src = "assets/Rock.jpeg";
          cpuSelect = 1;
        } else if (turn === 2) {
          cpuSelected.src = "assets/Paper.jpeg";
          cpuSelect = 2;
        } else {
          cpuSelected.src = "assets/Scissors.jpeg";  
          cpuSelect = 3;
        } 
      }
      function calculatePoints() {
  if (userSelect === cpuSelect) {
    gameResult.textContent = "Players tie!";    
  } else if( (userSelect === 1 && cpuSelect === 3) || (userSelect === 2 && cpuSelect === 1) || (userSelect === 3 && cpuSelect === 2)) {
    gameResult.textContent = "User Winner!";    
    userPoint++;
    userPoints.textContent = userPoint;
  } else {
    gameResult.textContent = "Cpu Winner";    
    cpuPoint++;
    cpuPoints.textContent = cpuPoint;
  } 
}
function finalScore() {
    if (userPoint === 3) {
     alert('User is the winner!');  
     window.location.reload()
     return;
   } else if(cpuPoint === 3) {
      alert('CPU is the winner!')   
      window.location.reload();
      return;

    }
   }


