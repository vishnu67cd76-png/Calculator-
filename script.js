function btnclk(val){
	document.getElementById("screen").value+=val
}
function clr(){
	document.getElementById("screen").value=""
}
function eqlclk() {
  var text = document.getElementById("screen").value;

  // Prevent calculation when input is empty
  if (text.trim() === "") {
    document.getElementById("screen").value = "Enter something!";
    return;
  }

  try {
    // Evaluate mathematical expression
    var result = eval(text);
    // Handle invalid or undefined cases
    if (isNaN(result) || result === Infinity) {
      document.getElementById("screen").value = "Error";
    } else {
      document.getElementById("screen").value = result;
    }
  } catch (error) {
    // Catch syntax or runtime errors
    document.getElementById("screen").value = "Error";
  }
}
function delbtn(){
	let screen=document.getElementById("screen")
	screen.value=screen.value.slice(0,-1)
}
