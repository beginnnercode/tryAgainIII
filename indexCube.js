var level = 0;
var vieti = 3;
$(".level").html("Level: " + level);
$(".vieti").html("Lifes: " + vieti);
openGame();
var openGameInterval;
var jocPornit = false;
function openGame() {

  if (jocPornit === true) {
    return;
  }
  jocPornit = true;
  openGameInterval = setInterval(function () {
    var inima = $("<div class='inima'></div>").css(
      "left",
      Math.floor(Math.random() * 550) + 1
    );
    $("div.game-container").append(inima);
    var durataCaderii = Math.floor(Math.random() * 3000) + 1500;
    $(inima).animate({ top: "85vh" }, durataCaderii, function () {
      var pozitieInimaY = $(inima).offset().top + $(inima).height();

      var pozitieCosY = $(".cosJucator").offset().top;

      var pozitieInimaX = $(inima).offset().left + $(inima).width();

      var pozitieCosX =
        $(".cosJucator").offset().left + $(".cosJucator").width();

    //   var marjaEroareX = ($(inima).width() + $(".cosJucator").width()) / 2;

      if (
        Math.abs(pozitieInimaY - pozitieCosY) < 70 &&
        Math.abs(pozitieInimaX - pozitieCosX) < 70
      ) {
        level++;
        $(".level").html("Level: " + level);
        $(".vieti").html("Lifes: " + vieti);
      } else {
        if (vieti > 0) {
          vieti--;
          $(".vieti").html("Lifes: " + vieti);
          jocPornit = false;
          
        }
        if (vieti === 0) {
          
          resetGame();
        }
      }

      $(this).remove();
    });
  }, 2000);
}

$(document).on("mousemove", function (event) {
  var containerWidth = $(".game-container").width();
  var cosJucatorWidth = $(".cosJucator").width();
  if (event.pageX > containerWidth - cosJucatorWidth) {
    event.pageX = containerWidth - cosJucatorWidth;
  }

  $(".cosJucator").css("left", event.pageX + "px");
});

function resetGame() {
  jocPornit = false;
  vieti = 0;
  level = 0;
  clearInterval(openGameInterval);
  openGameInterval=null;
  $("h1.mesaj").remove();
  $("body").removeClass("gameOver");
  $(".inima").remove();
  $("button").remove();
  $(".boxAfter").remove();
  $(".boxBefore").remove();

  $("body").addClass("gameOver");
  $("body").append("<h1 class='mesaj'><EM>You LOSE!NEXT TIME?</em></h1>");
  $("h1.mesaj").before("<div class='boxBefore'></div>")
  $("h1.mesaj").after("<div class='boxAfter'></div>")
  $("body").append("<button type='button'class='btn btn-warning'>Try again!?</button>");
  $(".game-container").hide();
  $(".level").html("Level: " + level);
  $(".vieti").html("Lifes: " + vieti);
  
  $("button.btn").on("click", function () {

    setTimeout(function () {
        $("button").remove();
        $(".boxAfter").remove();
        $(".boxBefore").remove();
        $("h1.mesaj").remove();
        $("body").removeClass("gameOver");
        $(".game-container").show();
        level = 0;
        vieti = 3;
        $(".level").html("Level: " + level);
        $(".vieti").html("Lifes: " + vieti);
        openGame();
      }, 2000);


  });

}
