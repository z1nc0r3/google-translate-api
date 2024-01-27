const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const client = "gtx";
const sl = "auto";
const tl = "si";
const hl = "en-US";
const dt1 = "t";
const dt2 = "bd";
const dj = "1";
const source = "input";

rl.question("Enter the text to translate: ", (answer) => {
	translate(answer);
	rl.close();
});

function translate(q) {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url:
			"https://translate.googleapis.com/translate_a/single?client=" +
			client +
			"&sl=" +
			sl +
			"&tl=" +
			tl +
			"&hl=" +
			hl +
			"&dt=" +
			dt1 +
			"&dt=" +
			dt2 +
			"&dj=" +
			dj +
			"&source=" +
			source +
			"&q=" +
			q,
		headers: {},
	};

	axios
		.request(config)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}
