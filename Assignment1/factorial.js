function fact(n) {
    if (n == 0 || n == 1) 
        return 1;
    
    return n * fact(n-1);
}

var n = prompt("Looking to find factorial?\nEnter the number: ");

document.write(`Factorial of ${n} is: ${fact(n)}.`);