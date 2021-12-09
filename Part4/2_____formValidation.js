function validateFormFields() {
    if(document.getElementById('username').value.length < 1) {
        alert("Please enter userName");
        return false;
    }
    return true;
}