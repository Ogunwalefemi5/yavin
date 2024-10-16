// custom js

// scroll effect
const scrollEffect = function () {
	const navbar = document.querySelector(".navbar");
	const arrow = document.getElementById("arrow");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("bg-white", "shadow");

			navbar.style.opacity = 0.9;

			arrow.classList.remove("d-none");
		} else {
			navbar.classList.remove("bg-white", "shadow");
			arrow.classList.add("d-none");
		}
	});

	arrow.addEventListener("click", () => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: "smooth",
		});
	});
};

// countingEffect
const countingEffect = function () {
	// const numContainer = document.getElementById("numCount");
	const allElements = document.querySelectorAll("#numCount");
	// const numDelay = 4;

	allElements.forEach((numContainer, numDelay) => {
		numDelay += 1;
		const numCount = numContainer.dataset.numCounts;
		countingRun(numContainer, numCount, numDelay);
	});
};

const countingRun = function (element, num, delay) {
	for (i = 0; i < num; i++) {
		element.textContent = 0;
		setTimeout(() => {
			element.textContent++;
		}, delay * i);
	}
};

const scrollTop = function () {};

const eventsHandle = [countingEffect, scrollEffect, scrollTop];

eventsHandle.forEach((e) => document.addEventListener("DOMContentLoaded", e));
