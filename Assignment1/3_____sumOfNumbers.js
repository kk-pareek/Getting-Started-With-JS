var n = prompt("Want sum of n digits?\nEnter n:");
var sum = 0;

for(var i = 1; i <= n; i++) {
    sum += i;
}

document.write(`Sum of ${n} natural numbers is: ${sum}`);