//your code here
const text = document.getElementById("evaluatedText");
const count = document.getElementById("count");
function handleInput(e) {
	const sentence = e.target.value;
	const countValue = sentence.split(" ").length;
	count.textContent= countValue;
}
text.addEventListener("input", handleInput);