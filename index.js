console("Mathmatical calculation of the calculator is performed by the code part of javaScript");

// Clear all the inputs of the screen
function ClearAll() {
    document.getElementById("result").value = "";
}

//Display the inputs provided by user and result of Mathematical calculation
function display(value) {
    document.getElementById("result").value += value;
}

//Calculate the Mathmatical expression
function calculate() {
    var firstInput = document.getElementById("result").value;
    //Evaluate the Mathmatical calculation
    var secondInput = eval(firstInput);
    document.getElementById("result").value = secondInput;
}