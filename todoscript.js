/* What I don't need to do:
I don't think I need the .completed css; it includes line-through.
The body is already there.
I did h1 title in HTML. 
I made the button in HTML and gave it "add_todo" ID.
Input box (light grey text box with blue border)
List items in darker grey 
*/

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

// Colt went over this event listener 
ulist.addEventListener("click", function(event) {
	// testing
	//alert("clicked");
// Jaya says all tag names, convention is capitalization
	if(event.srcElement.nodeName == "LI") {
		if(event.srcElement.className) {
			// to clear line-through
			event.srcElement.className = "";
		} else {
			// don't need an if statement to check for li, since
			// there isn't anything inside a ul except list items
			event.srcElement.className = "completed";
		}
	}
// Jaya suggested adding another if, to remove li
	if(event.srcElement.nodeName == "SPAN") {
	// need to remove li item the span is on (and the span itself)
		event.srcElement.parentNode.remove();
	}
});

ulist.addEventListener("mouseover", function(event) {
	event.preventDefault();
	// testing
	//alert("moused over");
// Jaya says all tag names, convention is capitalization
	if(event.srcElement.nodeName == "SPAN") {
		event.srcElement.style.color = "#FF6666";
	}
});

ulist.addEventListener("mouseout", function(event) {
	event.preventDefault();
	// testing
	//alert("moused over");
// Jaya says all tag names, convention is capitalization
	if(event.srcElement.nodeName == "SPAN") {
		event.srcElement.style.color = "white";
	}
});

function addItem() {
	if(input.value != ""){
		var listitem = document.createElement("LI");
		listitem.innerHTML = input.value;
		ulist.appendChild(listitem);
		var span = document.createElement("SPAN");
		span.innerHTML = "Delete";
		span.style.float = "right";
		span.style.color = "white";
		listitem.appendChild(span);
		input.value = "";
		input.setAttribute('placeholder', "what do you need to do?");
	}
}
