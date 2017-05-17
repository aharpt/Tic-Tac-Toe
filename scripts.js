// nouns of project

// board
// pieces

// class RandomNumber {
//   randomNumber(highNumber) {
//
//   }
// };



class Board {
  createBoardPiece(pieceContainer) {
    const spaceNumber = "<div class='space'></div>";
    const container = pieceContainer;
    $(container).append(spaceNumber)
    // $(spaceNumber).attr("id", "space-1");
  }
};

var board = new Board();

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


var faClicked;

class Piece {
  createPiece(pieceTypeClass, container) {
    if (pieceTypeClass === "X's") {
      $(container).append("<i class='fa fa-times fa-3x disabled' aria-hidden='true'></i>");
    } else if (pieceTypeClass === "O's") {
      $(container).append("<i class='fa fa-opera fa-3x disabled' aria-hidden='true'></i>");
    }
  }

  clickPiece() {
    if (!$(".fa").hasClass("clicked")) {
      faClicked.removeClass("disabled").addClass("clicked");
    } else {
      faClicked.addClass("disabled").removeClass("clicked");
    }
  }

};

const piece = new Piece();

$("body").append("<div class='x-pieces-container'></div>");
$("body").append("<div class='o-pieces-container'></div>");

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


$(".fa").click(function() {
  faClicked = $(this);
  piece.clickPiece();
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
