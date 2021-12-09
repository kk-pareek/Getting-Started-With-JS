let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let gender = document.getElementsByName('gender');
let education = document.getElementById('education');
let course = document.getElementById('courses');

function validateFormFields() {
    if (userName.value.length < 1) {
        alert("Username can not be blank...");
        userName.focus();
        return false;
    }

    else if (email.value.length < 1) {
        alert("Email can not be blank...");
        email.focus();
        return false;
    }

    else if (password.value.length < 8) {
        alert("Password should atleast have 8 characters.");
        password.focus();
        return false;
    }

    else if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
        alert("Please Select Your Gender");
        return false;
    }

    else if (education.value == "") {
        alert("Please select Education.");
        return false;
    }

    else if (course.value == "") {
        alert("Please select course.");
        return false;
    }
}
