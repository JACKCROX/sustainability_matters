const button1 = document.getElementById("button_interest_section");
const button2 = document.getElementById("button_value_section");
const button3 = document.getElementById("button_personality_section");
const section1 = document.getElementById("interest_section");
const section2 = document.getElementById("value_section");
const section3 = document.getElementById("personality_section");


// Add click event visitors to the buttons
button1.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" }); 
});

button2.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: "smooth" });
});

button3.addEventListener("click", () => {
    section3.scrollIntoView({ behavior: "smooth" });
  });

