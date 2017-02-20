// create random number function to decide who starts the game
var randomNumber = function() {
  return Math.floor(Math.random() * 2) + 1;
}

var randomNumberHolder = randomNumber();

// decides who goes first, appends appropriate message, and changes appropriate elements html
switch (randomNumberHolder) {
  case 1:
    document.querySelector(".decision-container").innerHTML = "<p>X's go first</p>";
    $(".fa-opera").addClass("disabled");
    break;

  case 2:
    document.querySelector(".decision-container").innerHTML = "<p>O's go first</p>";
    $(".fa-times").addClass("disabled");
    break;
}

// jquery

$(function() {

  $(".fa").click(function() {
    $(this).addClass("highlight");
  });

  $(".space").click(function() {
    if ($(".not-selected").hasClass("highlight")) {
      // this .fa
        console.log(this);
        var pieceUsed = $(".not-selected.highlight").removeClass("not-selected").get();

        $(this).html(pieceUsed);
        $(this).off("click");
    }
  });

  $(".space .fa").off("click").parent(".space").off("click");

});


$(".fa").click(function() {

  if ($(".x-container").children().length > $(".o-container").children().length) {
    console.log("log");
    document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
    $(".fa-times").removeClass("disabled");
    $(".fa-opera").addClass("disabled");
  } else if ($(".o-container").children().length > $(".x-container").children().length) {
    console.log("log");
    document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
    $(".fa-opera").removeClass("disabled");
    $(".fa-times").addClass("disabled");
  } else if ($(".o-container").children().length === $(".x-container").children().length && randomNumberHolder === 1 && $(".x-container").children().length < 5) {
    document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
    $(".fa-opera.not-selected").addClass("disabled");
    $(".fa-times.not-selected").removeClass("disabled");
  } else if ($(".o-container").children().length === $(".x-container").children().length && randomNumberHolder === 2 && $(".x-container").children().length < 5) {
    document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
    $(".fa-times.not-selected").addClass("disabled");
    $(".fa-opera.not-selected").removeClass("disabled");
  }




});



// figure out if someone wins the game

//


// display result when the end of the game occurs
