var ulist = document.querySelector("ul");

var input = document.querySelector("input");

input.addEventListener("keypress", function(event){
	var key = event.which;
	if(key === 13) {
		event.preventDefault();
		addItem();
	}
});

var button = document.querySelector("button");

button.addEventListener("click", function(event){
		event.preventDefault();
		addItem();
});

function addItem() {
	var listitem = document.createElement("LI");
	listitem.innerHTML = input.value;
	ulist.appendChild(listitem);
	input.value = "";
	input.setAttribute('placeholder', "what do you need to do?");
}