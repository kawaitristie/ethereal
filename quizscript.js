function getAnswers() {
  var c1counter = 0;
  var c2counter = 0;
  var c3counter = 0;
  var c4counter = 0;

  var shoes = document.getElementsByName("shoes");
  var landscape = document.getElementsByName("landscape");
  var breakfast = document.getElementsByName("breakfast");
  var pizza = document.getElementsByName("pizza");
  var activity = document.getElementsByName("activity");

  var qLocation = document.getElementsByClassName("questionBanner");

  for (var shoesChoice in shoes) {
    if (shoes[shoesChoice].checked) {
      switch (shoes[shoesChoice].value) {
        case "boots":
          inc1();
          break;
        case "birkenstock":
          inc2();
          break;
        case "converse":
          inc3();
          break;
      }
      window.scrollTo(0, qLocation[1].offsetTop);
    }
  }

  for (var lanChoice in landscape) {
    if (landscape[lanChoice].checked) {
      switch (landscape[lanChoice].value) {
        case "cityscape":
          inc1();
          break;
        case "mountain":
          inc2();
          break;
        case "beach":
          inc3();
          break;
      }
      window.scrollTo(0, qLocation[2].offsetTop);
    }
  }

  for (var brChoice in breakfast) {
    if (breakfast[brChoice].checked) {
      switch (breakfast[brChoice].value) {
        case "coffee":
          inc1();
          break;
        case "vegan":
          inc2();
          break;
        case "healthy":
          inc3();
          break;
      }
      window.scrollTo(0, qLocation[3].offsetTop);
    }
  }

  for (var pizChoice in pizza) {
    if (pizza[pizChoice].checked) {
      switch (pizza[pizChoice].value) {
        case "cheese":
          inc1();
          break;
        case "veganPizza":
          inc2();
          break;
        case "supreme":
          inc3();
          break;
      }
      window.scrollTo(0, qLocation[4].offsetTop);
    }
  }

  for (var actChoice in activity) {
    if (activity[actChoice].checked) {
      switch (activity[actChoice].value) {
        case "yoga":
          inc1();
          break;
        case "biking":
          inc2();
          break;
        case "swimming":
          inc3();
          break;
      }
    }
  }

  var counterCheck = [c1counter, c2counter, c3counter, c4counter];
  var max = 2;
  var mostPicked = 0;
  var resultHeader = document.getElementById("resultHeader");
  var resultImg = document.getElementById("resultImg");

  if (c1counter + c2counter + c3counter + c4counter > 4) {
    countChoices();
    window.scrollTo(0, qLocation[5].offsetTop);
  }

  function countChoices() {
    for (var i = 0; i < counterCheck.length; i++) {
      if (counterCheck[i] > max) {
        mostPicked = counterCheck[i];
        switch (counterCheck[i]) {
          case counterCheck[0]:
            resultHeader.innerHTML = "DIOR";
            break;

          case counterCheck[1]:
            resultHeader.innerHTML = "LV";
            break;

          case counterCheck[2]:
            resultHeader.innerHTML = "GUCCI";
                     break;
        }
      }
    }

    if (counterCheck[0] == max && counterCheck[1] == max) {
      resultHeader.innerHTML = "DIOR & LV";
    } else if (counterCheck[1] == max && counterCheck[2] == max) {
      resultHeader.innerHTML = "LV & GUCCI";
    } else if (counterCheck[0] == max && counterCheck[2] == max) {
      resultHeader.innerHTML = "DIOR & GUCCI";
    } 
  }

  function inc1() {
    c1counter++;
  }

  function inc2() {
    c2counter++;
  }

  function inc3() {
    c3counter++;
  }

  function inc4() {
    c4counter++;
  }
}
