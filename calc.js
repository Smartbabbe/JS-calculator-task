var first_number = parseFloat(prompt("Enter the first number"));

var second_number = parseFloat(prompt("Enter the second number"));

var operators = prompt("Enter the operation +, -, *, or /");

if (operators == "+"){
    result = first_number + second_number;
    alert("Your answer is " + result + " .");
} 
else if (operators == "-"){
    result = first_number - second_number;
    alert("Your answer is " + result + " .");
}  
else if (operators == "*"){
    result = first_number * second_number;
    alert("Your answer is " + result + " .");
} 
else if (operators == "/") {
    result = first_number / second_number;
    alert("Your answer is " + result + " .");
} 
else{
    alert("You have entered a wrong operation, Please start again");
  }




