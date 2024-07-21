var letterSquare = ["a","b","c","d","e","f","g","h"];


var allCoordinates = [];
var userAnswers = [];
var nextCoordinate = -1;
var rightAnswers = 0;
var started = false;
var timer;
var timeLeft= 30;


startTheGame ();


function startTheGame(){
    $("h1").on("click", function(){
        if (!started){
            started = true;
            allCoordinates = [];
            userAnswers = [];
            nextCoordinate = -1;
            rightAnswers = 0;
            timeLeft = 30;
            countdown();
            allowClick ();
            $("h2").text("Time:30s")
        }})}


function countdown() {
    $("h1").text("3");

    setTimeout(function() {
        $("h1").text("2");
        setTimeout(function() {
            $("h1").text("1");
            setTimeout(function() {
                newCoordinate();
                startTimer();
            }, 1000);
        }, 1000);
    }, 1000);
}


function newCoordinate (){
    
    
    nextCoordinate++;

    var randomNumber = Math.floor (Math.random()*8)+1;

    var randomNumberTwo = Math.floor (Math.random()*8);
    var randomLetter = letterSquare [randomNumberTwo];

    var randomCoordinate = randomLetter+randomNumber;

    console.log (randomCoordinate);
    allCoordinates.push (randomCoordinate)

    $("h1").text (randomCoordinate);
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            gameOver("Time's Up! Click Again to Restart");
        }
        $("h2").text("Time Left: " + timeLeft + "s");
    }, 1000);
}



//USER CLICK
function allowClick (){

    $(".square").off("click");
    if (started === true){

    $(".square").on("click", function(event){

    var userClickedSquare = this.id;
    userAnswers.push (userClickedSquare);
    checkAnswer ();
    $("#"+userClickedSquare).addClass("pressed");
    setTimeout(function (){
    $("#"+userClickedSquare).removeClass ("pressed");
    }, 100)}
)}}





function checkAnswer(){
    if (allCoordinates [nextCoordinate] === userAnswers[nextCoordinate]) {
        rightAnswers++;
        newCoordinate();

    }else{
        gameOver();
        $("h2").text("You got "+(userAnswers.length-1)+" answers")
    }
}


function gameOver (){
    
    started = false;
    clearInterval(timer);
        $("h1").text("Game Over, Click Here Restart");
        $("h2").text("You got "+userAnswers.length+" answers")
        $("body").removeClass("gradient");
        setTimeout(function(){$("body").addClass("gradient")}, 200);
}



