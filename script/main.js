let number = document.querySelector("#number");
let display = document.querySelector("#display");

function checkNumber() {
    if (number.value % 2 == 0) {
        display.innerHTML = "Even";
    }
    else if (number.value % 2 != 0 ) {
            display.innerHTML = "Odd";
    }
    }        