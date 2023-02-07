
      {
        var highScore = 0;
        var sequence = ["red", "green", "blue"];
      }
      function gameLoop() {
        var score = 0;
        var input = "none";
        showColor(0);
        document.getElementById("high-score").innerHTML =
          "High Score: " + highScore;
        while (true) {
          document.getElementById("score").innerHTML = "Score: " + score;
          if (score > highScore) {
            high_score = score;
            document.getElementById("high-score").innerHTML =
              "High Score: " + high_score;
          }
          if (!newTurn()) {
            input = "none";
            sequence = [];
            return;
          }
          score++;
        }
      }

      function resetColor(eleId) {
        document.getElementById(eleId).style.backgroundColor = "";
        console.log("colors reset");
      }

      function showColor(place) {
        var dark = "";
        switch (sequence[place]) {
          case "yellow":
            dark = "darkgoldenrod";
            break;
          case "blue":
            dark = "darkblue";
            break;
          case "red":
            dark = "darkred";
            break;
          case "green":
            dark = "darkgreen";
            break;
        }
        document.getElementById(sequence[place]).style.backgroundColor = dark;
        setTimeout(resetColor, 1000, sequence[place]);
        if (place + 1 < sequence.length) {
          setTimeout(showColor, 2000, place + 1);
        }
      }

      function newColor() {
        switch (Math.random % 4) {
          case 0:
            return "yellow";
          case 1:
            return "blue";
          case 2:
            return "red";
          case 3:
            return "green";
        }
      }

      function newTurn() {
        sequence = [sequence, newColor()];
        showColor(0);
        return false;
      }
    