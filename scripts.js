// nouns of project

// board
// pieces

// class RandomNumber {
//   randomNumber(highNumber) {
//
//   }
// };

var i = 0;

class Board {
  createPiece() {
    i++;
    const spaceNumber = "<div class='space'></div>";
    $(".outer-space-container").append(spaceNumber)
    // $(spaceNumber).attr("id", "space-1");
  }
};

var board = new Board();
var piece1 = board.createPiece();
var piece2 = board.createPiece();
var piece3 = board.createPiece();


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



// decides who goes first, appends appropriate message, and changes appropriate elements html
switch (randomNumberHolder) {
  case 1:
    document.querySelector(".decision-container").innerHTML = "<p>X's go first</p>";
    $faOpera.addClass("disabled");
    break;

  case 2:
    document.querySelector(".decision-container").innerHTML = "<p>O's go first</p>";
    $faTimes.addClass("disabled");
    break;
}

// jquery

$(function() {

  $fa.click(function() {
    $(this).addClass(classHighlight);
  });

  $(".space").click(function() {
    if ($(".not-selected").hasClass(classHighlight)) {
      // this .fa
        console.log(this);
        var pieceUsed = $(".not-selected.highlight").removeClass("not-selected").get();

        $(this).html(pieceUsed);
        $(this).off("click");
    }
  });

  $(".space .fa").off("click").parent(".space").off("click");

});


$fa.click(function() {

  if ($xContainer.children().length > $oContainer.children().length) {
    console.log("log");
    document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
    $faTimes.removeClass("disabled");
    $faOpera.addClass("disabled");

  } else if ($oContainer.children().length > $xContainer.children().length) {
    console.log("log");
    document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
    $faOpera.removeClass("disabled");
    $faTimes.addClass("disabled");

  } else if ($oContainer.children().length === $xContainer.children().length && randomNumberHolder === 1 && $(".x-container").children().length < 5) {
    document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
    $faOperaNotSelected.addClass("disabled");
    $faTimesNotSelected.removeClass("disabled");

  } else if ($oContainer.children().length === $xContainer.children().length && randomNumberHolder === 2 && $(".x-container").children().length < 5) {
    document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
    $faTimesNotSelected.addClass("disabled");
    $faOperaNotSelected.removeClass("disabled");
  }




});



// figure out if someone wins the game

/* if (space1 && space2 && space3 === x) {
  x wins
}

*/
// display result when the end of the game occurs
