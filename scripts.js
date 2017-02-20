// jquery

$(function() {
});

// jquery ui
$(".fa").draggable({
  start: function() {
    $(this).addClass("highlight");
  },
  stop: function() {
    $(this).removeClass("highlight");
    $(this).draggable("disable").addClass("disabled");
  },
  containment: ".outer-space-container"

});

$(".space").droppable({
  accept: ".fa"
});

// create random number function to decide who starts the game
var randomNumber = function() {
  return Math.floor(Math.random() * 2) + 1;
}

var randomNumberHolder = randomNumber();

var numOfXsRemaining = 5;
var numOfOsRemaining = 5;

// decides who goes first, appends appropriate message, and changes appropriate elements html
switch (randomNumberHolder) {
  case 1:
    document.querySelector(".decision-container").innerHTML = "<p>X's go first</p>";
    $(".fa-opera").draggable("disable").addClass("disabled");
    numOfXsRemaining -= 1;
    break;

  case 2:
    document.querySelector(".decision-container").innerHTML = "<p>O's go first</p>";
    $(".fa-times").draggable("disable").addClass("disabled");
    numOfOsRemaining -= 1;
    break;
}


if (numOfOsRemaining === numOfXsRemaining && randomNumberHolder === 1) {
  document.querySelector(".decision-container").innerHTML = "<p>X's turn</p>";
  $(".fa-opera").draggable("disable").addClass("disabled");
  numOfXsRemaining -= 1;
  console.log("O's turn");
} else if (numOfOsRemaining === numOfXsRemaining && randomNumberHolder === 2) {
  document.querySelector(".decision-container").innerHTML = "<p>O's turn</p>";
  $(".fa-times").draggable("disable").addClass("disabled");
  console.log("X's turn");
}
