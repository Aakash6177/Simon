// let buttonColors = ['red','blue','green','yellow'];
// randomNum = nextSequence();
// let randomChosenColor = buttonColors[randomNum];
// console.log(randomChosenColor);
// let gamePattern = [randomChosenColor];



// function nextSequence(){
//     return Math.floor(Math.random()*3);
// }

$(document).keydown({
    
});

var colorList = ['red', 'blue', 'green','yellow'];
var sequence = [];

function getRandomIndex(){
    randomNum = Math.floor(Math.random()*4);
    console.log(randomNum);
    return randomNum;
}

function getRandomColor(){
    let randomIndex = getRandomIndex();
    console.log("inside getRandomColor "+colorList[randomIndex]);
    return colorList[randomIndex];
}

function appendColor(color){
    sequence.push(color);
    console.log("inside appenColor "+sequence);
}

// starter(); this is going to initialize the list with a random color, press a key to start 

 // this is going to check the user click and compare it to the original list

function checkuserInput(randomColor){
    
    let input= prompt("what is the color?");
    
    while(input === randomColor){
        appendColor(randomColor);
        console.log(sequence);
        randomColor = getRandomColor();
        input = prompt("what is the color?");
        
        }
        alert("Sorry Wrong color");
    }
    

// appendColor(); // if the sequence input by the user matches the sequence in the lsit then generate append another color to the original list

// gameFlag = true;
// while(gameFlag){
//     appendColor();
//     checkUserInput();
// }

// driver code

$(document).keypress(function (){
    $('footer').text(getRandomColor());
    $('button').attr("id", )
})
// rColor = getRandomColor();
checkuserInput(rColor);




