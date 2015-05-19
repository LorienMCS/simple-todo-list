/* What I don't need to do:
I don't think I need the .completed css; it includes line-through.
The body is already there.
I did h1 title in HTML. 
I made the button in HTML and gave it "add_todo" ID.
Input box (light grey text box with blue border)
List items in darker grey

What I need to do:
My event listeners aren't working, even though
I know from  */

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