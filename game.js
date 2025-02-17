
gamePattern = [];
buttonColours = ["red" , "blue" , "green" , "yellow"];
userClickedPattern =[];
var level = 0;


 $(document).one("keydown",function(){
     nextSequence();
 });





$("div."  + "btn").on("click" , function (){
    

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);


    console.log(userClickedPattern);
    console.log("userPattern");

    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
    
    
 });


function nextSequence() {

      userClickedPattern = [];  
      level = level + 1;
      $("h1").html("Level " + level );

    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    console.log("gamePattern");

    $("div."  + randomChosenColour).fadeOut(100).fadeIn(100);
    // var audioButton = new Audio("./sounds/" + randomChosenColour + ".mp3");
    // audioButton.play();
    playSound(randomChosenColour);

 
    
    
     
};



 function playSound(name) {
    var audioButton = new Audio( name + ".mp3");
    audioButton.play();
 };

 function animatePress(currentColour){
     $("div." + currentColour).addClass("pressed");
    setTimeout(function () {
        $("div." + currentColour).removeClass("pressed");
    }, 100);
 };

 function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Succes!");
        
        if(userClickedPattern.length === gamePattern.length   ) {
            console.log("Final");
            
            setTimeout(function (){
                nextSequence();
                
            } , 1000 );
             
           

        }
        

    } else {
        var wrongPlay = new Audio("wrong.mp3");
        wrongPlay.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
        
    }
   
    
 };

 function startOver(){
    level = 0;
    gamePattern = [];
    
 $(document).one("keydown",function(){
    nextSequence();
});
 };

 