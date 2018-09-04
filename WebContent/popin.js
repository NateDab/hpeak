// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("itemsoc");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




// When the user clicks on the button, open the modal

btn.onclick = function() {
    modal.style.display = "block";
	window.alert("click")
}

function opendiscuss(){
	
	modal.style.display = "block";
	/*
	var content = document.getElementByTagName("modal-content")
	content.style.position="absolute";
	content.style.top="0px";
	
	*/
	
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 