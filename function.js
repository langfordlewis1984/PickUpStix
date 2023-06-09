"use strict"

function yourName() {
    let user = prompt("Greetings fellow Picker! How should one refer to you?");
    const welcomeMsg = alert ("Welcome " + user + "!\nLet's get PICKIN!");
    const moreInfo = alert ("But FIRST! \nWe are going to need some more sticky info, " + user + "!");

    if (user === "Rich") {
        console.log("I liked your firey looking trainers today");
    } else if (user === "Sam") {
        console.log("Was nice to meet ya, thanks for your help and safe journey to Liverpool!")
    }else if (user === "Chris") {
        console.log("What do you bench, bro?")
    }else {
        console.log('there aint nobody else here, so you must be looking at me')
    }
    
    console.log("PS my shiz is best viewd at a width of 880px!")

    
    return document.write(user);
}

function timeOfDay() {
    let time = prompt("What hour is it? (0-23)");
    let location = prompt("What country are you in?");
    let message = "";

    if (time <= 11 && location === "england") {
        message = "Mornin'";
    } else if (time <= 18 && location === "england") {
        message = "afternoon";
    } else if (time < 24 && location === "england") {
        message = "Good Evenin'!";
    } else {
        message = "I don't seem to care what the time is or where you are in the end. Fuhgedabowdit!";

    return document.write(message);
}
}