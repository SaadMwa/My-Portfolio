document.addEventListener("DOMContentLoaded", () => {
  const sentences = [
    "Hi, I'm Saad.",
    "I'm a Web Developer.",
    "I build responsive websites."
  ];

  let sentenceIndex = 0;
  let charIndex = 0;
  const element = document.getElementById("typewriter");

  function typeWriter() {
    if (charIndex < sentences[sentenceIndex].length) {
      element.textContent += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        element.textContent = "";
        sentenceIndex = (sentenceIndex + 1) % sentences.length; 
        charIndex = 0;
        typeWriter();
      }, 200);
    }
  }

  typeWriter();
});
