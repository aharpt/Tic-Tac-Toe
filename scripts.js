// nouns of project

// board
// pieces

// class RandomNumber {
//   randomNumber(highNumber) {
//
//   }
// };


// board class
class Board {
  createBoardPiece(pieceContainer) {
    const spaceNumber = "<div class='space'></div>";
    const container = pieceContainer;
    $(container).append(spaceNumber)
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

// holds the last clicked piece, if applicable
var faClicked;

// Piece class
class Piece {
  createPiece(pieceType, container) {
    if (pieceType === "X's") {
      $(container).append("<i class='fa fa-times fa-3x disabled' aria-hidden='true'></i>");
    } else if (pieceType === "O's") {
      $(container).append("<i class='fa fa-opera fa-3x disabled' aria-hidden='true'></i>");
    }
  }

  // moves piece
  movePiece() {
    faClicked.removeClass("disabled").addClass("clicked");
    faClicked.draggable({
      grid: [1, 1]
    });
    console.log("World");
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


// $(".fa").on("drag", function() {
//   console.log("World");
//   faClicked = $(this);
//   piece.movePiece();
// });

// $(".fa").click(function() {
//   console.log("World 2");
//   faClicked = $(this);
//   piece.movePiece();
// });
//
// $(".fa").on("dragstart", function() {
//   // faClicked = $(this);
//   $(".fa").removeClass("clicked").addClass("disabled");
//   console.log("World 3");
// });

// holds the currently clicked piece and adds class clicked and removes class disabled

$(".fa").click(function() {
  faClicked = $(this);
  $(this).addClass("clicked").removeClass("disabled");
});

// adds the currently selected piece to the clicked space

$(".space").click(function() {
  $(this).html(faClicked);
  faClicked.removeClass("clicked").addClass("disabled");
});


// old code


class RandomNumber {
  randomNumber() {
    return Math.floor(Math.random() * 2) + 1;
  }
};

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



// // decides who goes first, appends appropriate message, and changes appropriate elements html
// switch (randomNumberHolder) {
//   case 1:
//     document.querySelector(".decision-container").innerHTML = "<p>X's go first</p>";
//     $faOpera.addClass("disabled");
//     break;
//
//   case 2:
//     document.querySelector(".decision-container").innerHTML = "<p>O's go first</p>";
//     $faTimes.addClass("disabled");
//     break;
// }
//
// // jquery
//
// $(function() {
//
//   $fa.click(function() {
//     $(this).addClass(classHighlight);
//   });
//
//   $(".space").click(function() {
//     if ($(".not-selected").hasClass(classHighlight)) {
//       // this .fa
//         console.log(this);
//         var pieceUsed = $(".not-selected.highlight").removeClass("not-selected").get();
//
//         $(this).html(pieceUsed);
//         $(this).off("click");
//     }
//   });
//
//   $(".space .fa").off("click").parent(".space").off("click");
//
// });
//
//
// $fa.click(function() {
//
//   if ($xContainer.children().length > $oContainer.children().length) {
//     console.log("log");
//     document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
//     $faTimes.removeClass("disabled");
//     $faOpera.addClass("disabled");
//
//   } else if ($oContainer.children().length > $xContainer.children().length) {
//     console.log("log");
//     document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
//     $faOpera.removeClass("disabled");
//     $faTimes.addClass("disabled");
//
//   } else if ($oContainer.children().length === $xContainer.children().length && randomNumberHolder === 1 && $(".x-container").children().length < 5) {
//     document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
//     $faOperaNotSelected.addClass("disabled");
//     $faTimesNotSelected.removeClass("disabled");
//
//   } else if ($oContainer.children().length === $xContainer.children().length && randomNumberHolder === 2 && $(".x-container").children().length < 5) {
//     document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
//     $faTimesNotSelected.addClass("disabled");
//     $faOperaNotSelected.removeClass("disabled");
//   }
//
//
//
//
// });
//
//
//
// // figure out if someone wins the game
//
// /* if (space1 && space2 && space3 === x) {
//   x wins
// }
//
// */
// // display result when the end of the game occurs
