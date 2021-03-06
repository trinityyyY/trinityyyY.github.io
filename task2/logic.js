function calculate() {
	
	var A = document.getElementById('one');
	var B = document.getElementById('two');
	var C = document.getElementById('three');
	var tbody2 = document.getElementById('tbody2');

	var X1;
	var X2;

	if (! (A.value == '' || B.value == '' || C.value == '')) {
		if (A.value == 0) {
			X1 = -C.value/B.value;
			X1 = X1.toFixed(2);
			X2 = "nothing";
			if (isNaN(X1)) {
				X1 = "can't be calculate";
				X2 = "can't be calculate";
			} 
		}
		else {
			var D = Math.pow(B.value, 2) - (4 * A.value * C.value);
			if (D >= 0) {
				var X1 = (-(B.value) + Math.sqrt(D))/(2 * A.value);
				var X2 = (-(B.value) - Math.sqrt(D))/(2 * A.value);
				X1 = X1.toFixed(2);
				X2 = X2.toFixed(2);
				if (isNaN(X1)) X1 = "can't be calculate";
				if (isNaN(X2)) X2 = "can't be calculate";
			} else {
				X1 = "discriminant less than zero";
				X2 = "discriminant less than zero";
			}
    	}
	} else{
		remove();
	}

	var tr = document.createElement('tr');

	tr.classList.add("highlight");

	tr.onclick = function remove() {
        this.parentNode.removeChild(tr);
    }

	tr.innerHTML = "<td>" + A.value + 
				   "</td><td>" + B.value + 
				   "</td><td>" + C.value + 
				   "</td><td>" + X1 + 
				   "</td><td>" + X2 + "</td>";
	tbody2.prepend(tr);
}

function handleChange(input) {
    if (input.value < -100) input.value = input.value.slice(0, 3);
    if (input.value > 100) input.value = input.value.slice(0, 2);
}