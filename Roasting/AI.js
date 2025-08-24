const button = document.querySelector(".button");
const output = document.querySelector("#output");
const input = document.querySelector("input");
function predict_result(){
   const value = input.value.toLowerCase().trim();
  if (value.includes("rich")) {
    output.innerText = "You will be rich... in wisdom. Sorry. 🧘‍♂️";
  } else if (value.includes("is someone thinking about me")) {
    output.innerText = "Someone special is thinking of you... it's your mom 😂";
  } else if (value.includes("success")) {
    output.innerText = "Great success is coming... after a long nap 😴";
  } else if (value.includes("my future")) {
    output.innerText = "Your future looks bright... wear sunglasses 😎";
  } else if (value.includes("is she loves me")) {
    output.innerText = "Go and look in the mirror first and I believe you will never ask this question again in your life.";
  } else if (value.includes("happiness")) {
    output.innerText = "Happiness is coming. But first, charge your phone 🔋";
  } else if (value.includes("marry")) {
  output.innerText = "Marriage? Sure. Just not with them. 😂";
}
else if (value.includes("job")) {
  output.innerText = "Your dream job is waiting... in another timeline.";
}
  else {
    output.innerText = "Type something juicy to reveal your destiny 🔮";
  }
     input.value = "";
}
button.addEventListener("click",predict_result);
    input.addEventListener("keydown",(event)=>{
      if(event.key==="Enter"){
        event.preventDefault();
        predict_result();
     
      }
    })

