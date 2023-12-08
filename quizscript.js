function scrollToForm() {
	var element = document.getElementById("form");
	element.scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest"
	});
}

function getAnswers() {
	var c1counter = 0;
	var c2counter = 0;
	var c3counter = 0;
	var c4counter = 0;

	var question1 = document.getElementsByName("question1");
	var question2 = document.getElementsByName("question2");
	var question3 = document.getElementsByName("question3");
	var question4 = document.getElementsByName("question4");
	var question5 = document.getElementsByName("question5");

	var qLocation = document.getElementsByClassName("questionBanner");

	for (var shoesChoice in question1) {
		if (question1[shoesChoice].checked) {
			switch (question1[shoesChoice].value) {
				case "dior1":
					inc1();
					break;
				case "lv1":
					inc2();
					break;
				case "gucci1":
					inc3();
					break;
			}
			window.scrollTo(0, qLocation[1].offsetTop);
		}
	}

	for (var lanChoice in question2) {
		if (question2[lanChoice].checked) {
			switch (question2[lanChoice].value) {
				case "dior2":
					inc1();
					break;
				case "lv2":
					inc2();
					break;
				case "gucci2":
					inc3();
					break;
			}
			window.scrollTo(0, qLocation[2].offsetTop);
		}
	}

	for (var brChoice in question3) {
		if (question3[brChoice].checked) {
			switch (question3[brChoice].value) {
				case "dior3":
					inc1();
					break;
				case "lv3":
					inc2();
					break;
				case "gucci3":
					inc3();
					break;
			}
			window.scrollTo(0, qLocation[3].offsetTop);
		}
	}

	for (var pizChoice in question4) {
		if (question4[pizChoice].checked) {
			switch (question4[pizChoice].value) {
				case "dior4":
					inc1();
					break;
				case "lv4":
					inc2();
					break;
				case "gucci4":
					inc3();
					break;
			}
			window.scrollTo(0, qLocation[4].offsetTop);
		}
	}

	for (var actChoice in question5) {
		if (question5[actChoice].checked) {
			switch (question5[actChoice].value) {
				case "dior5":
					inc1();
					break;
				case "lv5":
					inc2();
					break;
				case "gucci5":
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
						resultHeader.innerHTML = "Your suit brand is DIOR";
						break;

					case counterCheck[1]:
						resultHeader.innerHTML = "Your suit brand is LV";
						break;

					case counterCheck[2]:
						resultHeader.innerHTML = "Your suit brand is GUCCI";
						break;
				}
			}
		}

		if (counterCheck[0] == max && counterCheck[1] == max) {
			resultHeader.innerHTML = "Your suit brand is DIOR & LV";
		} else if (counterCheck[1] == max && counterCheck[2] == max) {
			resultHeader.innerHTML = "Your suit brand is LV & GUCCI";
		} else if (counterCheck[0] == max && counterCheck[2] == max) {
			resultHeader.innerHTML = "Your suit brand is DIOR & GUCCI";
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