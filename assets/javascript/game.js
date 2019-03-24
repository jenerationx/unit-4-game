$(document).ready(function () {
  var blueNum = 0;
  var purpleNum = 0;
  var greenNum = 0;
  var pinkNum = 0;
  var randomNum = 0;
  var counterNum = 0;
  var wins = 0;
  var losses = 0;

  function startGame() {
    // There will be four crystals displayed as buttons on the page. -done
    // The player will be shown a random number at the start of the game. - done
    // The random number shown at the start of the game should be between 19 - 120. -done
    counterNum = 0;
    $("#counter-total").text(parseInt(counterNum));
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#random-number").html(randomNum);
    $("#loss-total").text(losses);
    $("#wins-total").text(wins);

    // Each crystal should have a random hidden value between 1 - 12. -done

    blueNum = Math.floor(Math.random() * 12 + 1);
    purpleNum = Math.floor(Math.random() * 12 + 1);
    greenNum = Math.floor(Math.random() * 12 + 1);
    pinkNum = Math.floor(Math.random() * 12 + 1);
    console.log(blueNum, purpleNum, greenNum, pinkNum);

    $("#blue").attr("value", (blueNum));
    $("#purple").attr("value", (purpleNum));
    $("#green").attr("value", (greenNum));
    $("#pink").attr("value", (pinkNum));
  }


  // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. -done
  // Your game will hide this amount until the player clicks a crystal. -done
  // When they do click one, update the player's score counter. -done
  $(".btn").on("click", function () {
    counterNum = counterNum + parseInt($(this).attr("value"));
    $("#counter-total").text(parseInt(counterNum));
    console.log(this);

    // The player loses if their score goes above the random number.-done 
    if (counterNum > randomNum) {
      losses++;
      console.log("you lose " + losses);
      $("#win-lose").text("You lose!");
      startGame();
    }
    // The player wins if their total score matches the random number from the beginning of the game. -done
    else if (counterNum === randomNum) {
      wins++;
      console.log("you win " + wins);
      $("#win-lose").text("You win!");
      startGame();
    }
    else if (counterNum < randomNum) {
      $("#win-lose").text("");
    }

  });
  // The game restarts whenever the player wins or loses. -done
  startGame();

  // When the game begins again, the player should see a new random number. -done 
  // Also, all the crystals will have four new hidden values. -done

  //Of course, the user's score (and score counter) will reset to zero. -done

  // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game -done
});