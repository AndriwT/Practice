let blueClick = document.querySelector("button");

function makeItBlue (){
    blueClick.style.backgroundColor = "blue";
    blueClick.style.color = "white";
    blueClick.innerHTML = "You clicked me!";
}

blueClick.onclick = makeItBlue;
