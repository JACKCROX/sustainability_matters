var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0; //score
function jump(){
    if(character.classList == "animate"){return}  //prevent double jump
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate"); //remove jump animation
    },300);
}
var checkDead = setInterval(function() { 
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){ //check if character is on the block
        block.style.animation = "none"; 
        alert("Game Over. Try again to get highest score! Your current score: "+Math.floor(counter/100)); //alert game over
        counter=0;
        block.style.animation = "block 1.5s infinite linear"; //restart animation
    }else{
        counter++; //increment score
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100); //display score
    }
}, 10);

