const form = document.getElementById("registrationForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");


function checkPasswords() {

    if (password.value !== confirmPassword.value) {

        confirmPassword.setCustomValidity(
            "Passwords do not match."
        );

    } else {

        confirmPassword.setCustomValidity("");

    }

}


password.addEventListener(
    "input",
    checkPasswords
);


confirmPassword.addEventListener(
    "input",
    checkPasswords
);


form.addEventListener("submit", function (event) {

    checkPasswords();

    if (!form.checkValidity()) {

        event.preventDefault();

        event.stopPropagation();

    } else {

        event.preventDefault();

        alert("Registration completed successfully!");

    }

    form.classList.add("was-validated");

});


form.addEventListener("reset", function () {

    form.classList.remove("was-validated");

    confirmPassword.setCustomValidity("");

});