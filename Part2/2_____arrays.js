// let arr = [1,2,3,4,5]
// document.write(arr);

// arr[2] = "hello js";
// document.write(arr);

// for (let index = 0; index < arr.length; index++) {
//     document.write(arr[index] + "<br>");
// }

// for (var key in arr) {
//     document.write(arr[key] + "<br>");
// }

let values = {name: "kkpareek", coder: false, location: "Rajasthan"};
document.write(values["name"]);

document.write("<br><br>");

for (var key in values) {
    document.write(`${key}--->${values[key]} <br>`)
}