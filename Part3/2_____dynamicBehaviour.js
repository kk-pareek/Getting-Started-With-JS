let counter;

let textDisplay = "<select>";
textDisplay += "<option>Please select your id:</option>";

for (let i = 22; i < 222; i++) {
    textDisplay += "<option>" + i + "</option>";
}

textDisplay += "</select>";

document.write(textDisplay);