"use strict";

const preEl = document.getElementById("text");

fetch("./earth-anim.txt")
	.then((response) => response.text())
	.then((text) => {
		console.log("Text file loaded");
		const frames = text.split("|");
		const length = frames.length;
		let count = 0;
		setInterval(() => {
			preEl.textContent = frames[count % length];
			console.log(`preEl.textContent = frames[${count % length}]`);
			count++;
		}, 60);
	});
