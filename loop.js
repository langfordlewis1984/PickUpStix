"use strict"

let answer;

while (answer != "red") {
    answer = prompt("What's your favourite colour??")
    if (answer != "red") {
        alert("Nope! You must not know your own brain... TRY AGAIN!")
    } else {
        alert("That's Right!\nYour favourite colour is RED\nWell Done You")
    }
}