let boxes = document.querySelectorAll(".box");
let turno = true;
let reset = document.querySelector(".Reset");
let winnerfound = false;
let xscore = 0;
let oscore = 0;
let drawscore = 0;
let rs = document.querySelector(".rs");
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
function checkwinner(){
   winCombos.forEach((combo)=>{
    const [a ,b ,c ] = combo;
    let value1 = boxes[a].innerText;
    let value2= boxes[b].innerText;
    let value3 = boxes[c].innerText;

      if(value1 !=="" && value1 === value2 && value2 === value3){
        document.getElementById("Winner").innerText =`${value1} wins`;
        winnerfound = true;
        document.getElementById("Winner").classList.add("show");

        
      if (value1 === "O") {
        oscore++;
        document.getElementById("oScore").innerText = `O: ${oscore}`;
      } else {
        xscore++;
        document.getElementById("xScore").innerText = `X: ${xscore}`;
      }

          boxes[a].style.background = "linear-gradient(to right, #00c853, #64dd17)";
          boxes[b].style.background = "linear-gradient(to right, #00c853, #64dd17)";
          boxes[c].style.background = "linear-gradient(to right, #00c853, #64dd17)";

            boxes.forEach((box) =>{
        box.style.pointerEvents = "none";
            })
        }
    })
    if(!winnerfound){
        const filled = [...boxes].every(box=>box.innerText!=="");
        if(filled){
            document.getElementById("Winner").innerText = "its a draw";
            drawscore++;
            document.getElementById("Winner").classList.add("show");
            document.getElementById("Winner").style.display = "block"; 
            document.getElementById("draws").innerText = `draws: ${drawscore}`;
           
        }
    }
}
  boxes.forEach((box) =>{
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turno ? "O" : "X";
      checkwinner();
      turno = !turno;
    }
  });
});

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText ="";
        box.style.pointerEvents = "auto";
              box.style.background = "";
              document.getElementById("Winner").style.display = "none";
              document.getElementById("Winner").classList.remove("show");

    })
      document.getElementById("Winner").style.display = "none";
  winnerfound = false;
})

rs.addEventListener("click", () => {
  oscore = 0;
  xscore = 0;
  drawscore = 0;

  document.getElementById("oScore").innerText = "O: 0";
  document.getElementById("xScore").innerText = "X: 0";
  document.getElementById("draws").innerText = "Draws: 0";
});

