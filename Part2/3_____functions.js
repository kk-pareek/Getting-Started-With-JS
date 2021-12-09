// function func() {
//     alert("Inside func...");
// }

// func();



// function addNums(first = 0, second = 0) {
//     console.log("Number of arguments passed: " + arguments.length);
//     return first + second;
// }

// console.log(addNums(2));



//function expression...

// let func = function() {alert("works...")};
// func();


//Using call back functions...

function msg(message, yes, no) {
    if(confirm(message)) {
        yes();
    }
    else {
        no();
    }
}

// function displayMessage() {
//     alert("Continuing...");
// }

// function cancelMessage() {
//     alert("Cancelling...");
// }

// msg("Do you want to continue?", displayMessage, cancelMessage);




//or using function expression:

// msg("continue?",
//     ()=> {alert("continuing...")},
//     ()=> {alert("cancelling...")}
// )

// var a = 11 + "abc";
// console.log(a);
// console.log(typeof(a));

// var a = 1;
// console.log("two" < "three");


// Number a = 5;


//using arrow functions...

// let func = () => {return "I'm a string returned by that arrow function..."};
// let addFunc = (a, b) => a + b;

// console.log(typeof(func));
// console.log(addFunc(1,2));


//variable arguments...

function myFunc(...values) {
    console.log(values.length);
    console.log(values);
    console.log(typeof(values));
}

myFunc(1,2,3,3)