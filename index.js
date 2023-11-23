"use strict";

let allTextLines = [];
let index;

const preEl = document.querySelector("#text");

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

fetch("./earth-anim.txt")
	.then((res) => {
		return res.text();
	})
	.then((data) => {
		allTextLines = data.split("|");
	})
	.then(async () => {
		for (index = 0; index < allTextLines.length; index++) {
			if (index === allTextLines.length - 1) {
				index = -1;
			} else {
				preEl.textContent = allTextLines[index];
				console.log(`preEl.textContent = allTextLines[${index}]`);
				await sleep(50);
			}
		}
	});
