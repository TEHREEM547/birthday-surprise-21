
let password = "";

// Change your password here
let correctPassword = "1102";

function pressNumber(number) {

    if (password.length < 4) {
        password += number;
        updateDisplay();
    }

}

function updateDisplay() {

    for (let i = 1; i <= 4; i++) {

        let dot = document.getElementById("dot" + i);

        if (password.length >= i) {
            dot.innerHTML = "●";
        } else {
            dot.innerHTML = "○";
        }

    }

}

function clearPassword() {

    password = "";
    updateDisplay();

    document.getElementById("message").innerHTML = "";

}

function deleteNumber() {

    password = password.slice(0, -1);
    updateDisplay();

}

function checkPassword() {

    let message = document.getElementById("message");

    if (password === correctPassword) {

        message.innerHTML = "Correct Password! ❤️";

        document.getElementById("surprise").style.display = "flex";

    } else {

        message.innerHTML = "Wrong Password! Try Again 💔";

        password = "";
        updateDisplay();

    }

}

function closeSurprise() {

    document.getElementById("surprise").style.display = "none";

}
