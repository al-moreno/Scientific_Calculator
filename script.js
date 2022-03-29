var val = 0.0;

function addChar (input, character) {
	if (input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}



const sin = (form) => {
	form.display.value = Math.sin(form.display.value);
}


const cos = (form) => {
	form.display.value = Math.cos(form.display.value);
}
const tan = (form) => {
	form.display.value = Math.tan(form.display.value);
}


// const deleteChar = (input) => {
// 	input.value = input.value.substring(0, input.value.length - 1)
// }

const percent = (input) => {
	val = input.value;
	input.value = input.value + "%";
}

const compute = (form) => {
	form.display.value = eval(form.display.value);
}


// const changeSign = (input) => {
// 	if (input.value.substring(0, 1) == "-")
// 		input.value = input.value.substring(1, input.value.length)
// 	else
// 		input.value = "-" + input.value
// }



const checkNum = (str) => {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch != ")" && ch != "%") {
				alert("invalid input!")
				return false;
			}
			
		}
	}
	return true;
}