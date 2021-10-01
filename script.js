var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function lineThrough(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListElement(e) {
	if (e.target.className === "delClass"){
		e.target.parentElement.remove();
	}
}

function ulClick (e) {
	lineThrough(e);
	deleteListElement(e);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", ulClick);

