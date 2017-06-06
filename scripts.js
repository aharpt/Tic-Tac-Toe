// nouns of project

// board
// pieces

// class RandomNumber {
//   randomNumber(highNumber) {
//
//   }
// };

// holds the current side up, X's or O's
var currentSideUp;
// holds the last clicked piece, if applicable
var faClicked = $(this);
// holds first side up
var firstSideUp;
// number of pieces placed
var numOfPiecesPlaced = 0;
// holds winner, if applicable
var winner;
// holds counter for number of pieces tic tac toe board
var counter = 1;

class RandomNumber {
  randomNumber(highNumber) {
    return Math.floor(Math.random() * highNumber);
  }
};

const randomNumber = new RandomNumber();

// board class
class Board {
  createBoardPiece(pieceContainer) {
    var spaceNumber = "<div class='space' id='space-" + counter + "'></div>";
    const container = pieceContainer;
    $(container).append(spaceNumber);
    counter++;
  }
};

// new instance of Board class
const board = new Board();

// creates board pieces and appends them to correct containers
board.createBoardPiece($(".outer-space-container"));
board.createBoardPiece($(".outer-space-container"));
board.createBoardPiece($(".outer-space-container"));
$("body").append("<div id='outer-space-container-2' class='outer-space-container'></div>");

board.createBoardPiece($("#outer-space-container-2"));
board.createBoardPiece($("#outer-space-container-2"));
board.createBoardPiece($("#outer-space-container-2"));

$("body").append("<div id='outer-space-container-3' class='outer-space-container'></div>");
board.createBoardPiece($("#outer-space-container-3"));
board.createBoardPiece($("#outer-space-container-3"));
board.createBoardPiece($("#outer-space-container-3"));


// Piece class
class Piece {
  createPiece(pieceType, container) {
    if (pieceType === "X's") {
      $(container).append("<i class='fa fa-times fa-3x disabled' aria-hidden='true'></i>");
    } else if (pieceType === "O's") {
      $(container).append("<i class='fa fa-opera fa-3x disabled' aria-hidden='true'></i>");
    }
  }

};

// holds new instance of Piece class
const piece = new Piece();

// appends piece container

$("body").append("<div class='x-pieces-container'></div>");
$("body").append("<div class='o-pieces-container'></div>");

// creates pieces

piece.createPiece("X's", ".x-pieces-container");
piece.createPiece("X's", ".x-pieces-container");
piece.createPiece("X's", ".x-pieces-container");
piece.createPiece("X's", ".x-pieces-container");
piece.createPiece("X's", ".x-pieces-container");

piece.createPiece("O's", ".o-pieces-container");
piece.createPiece("O's", ".o-pieces-container");
piece.createPiece("O's", ".o-pieces-container");
piece.createPiece("O's", ".o-pieces-container");
piece.createPiece("O's", ".o-pieces-container");

// holds the currently clicked piece and adds class clicked and removes class disabled

$(".x-pieces-container .fa").on("click", function() {

  $(".o-pieces-container .fa").removeClass("disabled-siblings");

  faClicked = $(this);
  if (!faClicked.siblings().hasClass("clicked")) {
    $(this).siblings().addClass("disabled-siblings");
    faClicked.addClass("clicked").removeClass("disabled");
  }
});

$(".o-pieces-container .fa").on("click", function() {
  $(".x-pieces-container .fa").removeClass("disabled-siblings");
  faClicked = $(this);
  if (!faClicked.siblings().hasClass("clicked")) {
    $(this).siblings().addClass("disabled-siblings");
    faClicked.addClass("clicked").removeClass("disabled");
  }
});




class FirstTurn {
  firstTurn() {
    const decideFirstTurn = randomNumber.randomNumber(2);

    if (decideFirstTurn === 0) {
      firstSideUp = "X's";
      alert("X's turn");
      $(".x-pieces-container .fa").removeClass("disabled");
      currentSideUp = "X's";
    } else if (decideFirstTurn === 1) {
      firstSideUp = "O's";
      alert("O's turn")
      $(".o-pieces-container .fa").removeClass("disabled");
      currentSideUp = "O's";
    }
  }

  currentSideUp() {
    faClicked = "";
    if ($(".x-pieces-container .fa").length < $(".o-pieces-container .fa").length) {
      currentSideUp = "O's";
      $(".x-pieces-container .fa").addClass("disabled");
      $(".o-pieces-container .fa").removeClass("disabled");

      $(".fa:not(.disabled)").click(function(){
        $(this).addClass("clicked").removeClass("disabled");
      });

      console.log("X current side");

    } else if ($(".o-pieces-container .fa").length < $(".x-pieces-container .fa").length) {
      currentSideUp = "X's";
      $(".o-pieces-container .fa").addClass("disabled");
      $(".x-pieces-container .fa").removeClass("disabled");

      $(".fa:not(.disabled)").click(function(){
        $(this).addClass("clicked").removeClass("disabled");
      });

      console.log("O current side");
    } else {
      if (firstSideUp === "X's") {
        $(".x-pieces-container .fa").removeClass("disabled");
        $(".o-pieces-container .fa").addClass("disabled");
      } else if (firstSideUp === "O's") {
        $(".o-pieces-container .fa").removeClass("disabled");
        $(".x-pieces-container .fa").addClass("disabled");
      }

      console.log("first side up is: " + firstSideUp);
    }
  }

};

const firstTurn = new FirstTurn();

firstTurn.firstTurn();

$(".disabled").click(function() {
  $(this).addClass("disabled").removeClass("clicked");
});

// adds the currently selected piece to the clicked space



class DecideWinner {
  decideWinner() {
    // ways someone could win
    if ($("#outer-space-container-1").children().children(".fa-opera").length === 3 || $("#outer-space-container-2").children().children(".fa-opera").length === 3 || $("#outer-space-container-3").children().children(".fa-opera").length === 3) {

      var winnerInterval = function() {
        alert("O's win");
      };

      // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
      var winnerSetInterval = setInterval(winnerInterval, 250);
      setInterval(function() {
        clearInterval(winnerSetInterval);
      }, 250);

    } else if ($("#space-1").children(".fa-opera").length > 0 && $("#space-4").children(".fa-opera").length > 0 && $("#space-7").children(".fa-opera").length > 0 || $("#space-2").children(".fa-opera").length > 0 && $("#space-5").children(".fa-opera").length > 0 && $("#space-8").children(".fa-opera").length > 0 || $("#space-3").children(".fa-opera").length > 0 && $("#space-6").children(".fa-opera").length > 0 && $("#space-9").children(".fa-opera").length > 0) {
          console.log("console.log");
          var winnerInterval = function() {
            alert("O's win");
          };

          // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
          var winnerSetInterval = setInterval(winnerInterval, 250);
          setInterval(function() {
            clearInterval(winnerSetInterval);
          }, 250);

        } else if ($("#space-1").children(".fa-opera").length > 0 && $("#space-5").children(".fa-opera").length > 0 && $("#space-9").children(".fa-opera").length > 0 || $("#space-3").children(".fa-opera").length > 0 && $("#space-5").children(".fa-opera").length > 0 && $("#space-7").children(".fa-opera").length > 0) {
              console.log("console.log");
              var winnerInterval = function() {
                alert("O's win");
              };

              // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
              var winnerSetInterval = setInterval(winnerInterval, 250);
              setInterval(function() {
                clearInterval(winnerSetInterval);
              }, 250);

            } else if ($("#outer-space-container-1").children().children(".fa-times").length === 3 || $("#outer-space-container-2").children().children(".fa-times").length === 3 || $("#outer-space-container-3").children().children(".fa-times").length === 3) {

              var winnerInterval = function() {
                alert("X's win");
              };

              // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
              var winnerSetInterval = setInterval(winnerInterval, 250);
              setInterval(function() {
                clearInterval(winnerSetInterval);
              }, 250);

            } else if ($("#space-1").children(".fa-times").length > 0 && $("#space-4").children(".fa-times").length > 0 && $("#space-7").children(".fa-times").length > 0 || $("#space-2").children(".fa-times").length > 0 && $("#space-5").children(".fa-times").length > 0 && $("#space-8").children(".fa-times").length > 0 || $("#space-3").children(".fa-times").length > 0 && $("#space-6").children(".fa-times").length > 0 && $("#space-9").children(".fa-times").length > 0) {
              console.log("console.log");
              var winnerInterval = function() {
                alert("X's win");
              };

              // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
              var winnerSetInterval = setInterval(winnerInterval, 250);
              setInterval(function() {
                clearInterval(winnerSetInterval);
              }, 250);

            } else if ($("#space-1").children(".fa-times").length > 0 && $("#space-5").children(".fa-times").length > 0 && $("#space-9").children(".fa-times").length > 0 || $("#space-3").children(".fa-times").length > 0 && $("#space-5").children(".fa-times").length > 0 && $("#space-7").children(".fa-times").length > 0) {
              console.log("console.log");
              var winnerInterval = function() {
                alert("O's win");
            };

              // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
              var winnerSetInterval = setInterval(winnerInterval, 250);
              setInterval(function() {
                clearInterval(winnerSetInterval);
              }, 250);

            } else if ($(".space").children(".fa").length === 9) {
              var winnerInterval = function() {
                $("body").html("<p>Cat's game,</p><button id='play-again-button'>Play Again?</button>");
            };

              // http://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
              var winnerSetInterval = setInterval(winnerInterval, 250);
              setInterval(function() {
                clearInterval(winnerSetInterval);
              }, 250);

            }


            $("#play-again-button").hover(function() {
              console.log("World");
              // https://stackoverflow.com/questions/11658847/refresh-webpage-programmatically-javascript
              window.location.reload();
            });

  }
};



const Winner = new DecideWinner();


$(".space").click(function() {
  if (faClicked !== "") {
    $(this).html(faClicked);
  }
  $(this).children(".fa").off("click");
  faClicked.removeClass("clicked").addClass("disabled");
  // numOfPiecesPlaced++;


    Winner.decideWinner();

  firstTurn.currentSideUp();
});






// old code


// class RandomNumber {
//   randomNumber() {
//     return Math.floor(Math.random() * 2) + 1;
//   }
// };

const $faOpera = $(".fa-opera");
const $faTimes = $(".fa-times");
const $fa = $(".fa");
const classHighlight = "highlight";
const $xContainer = $(".x-container");
const $oContainer = $(".o-container");
const $faOperaNotSelected = $(".fa-opera.not-selected");
const $faTimesNotSelected = $(".fa-times.not-selected");


const newRandomNumber = new RandomNumber();
const randomNumberHolder = newRandomNumber.randomNumber();
