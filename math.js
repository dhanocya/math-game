let letOne = document.querySelector(".letOne");
let Opreter = document.querySelector(".operaters");
let letTwo = document.querySelector(".letTwo");

function genrateNum() {
    return Math.floor(Math.random() * 100);
}

letOne.innerHTML = genrateNum();
letTwo.innerHTML = genrateNum();

function genrateOperater() {
    let symbol = Math.floor(Math.random() * 10);
    if (symbol > 5) {
        Opreter.innerHTML = "+";
    } else if (symbol < 5) {
        Opreter.innerHTML = "-";
    } else {
        Opreter.innerHTML = "+";
    }
}

genrateOperater();

function ansRun() {
    let num = Number(letOne.innerHTML);
    let numt = Number(letTwo.innerHTML);

    let operator = Opreter.innerHTML;
    
    if (operator === "+") {
        answer = num + numt;
    } else if (operator === "-") {
        answer = num - numt;
    }

    document.querySelector(".ans").textContent = answer
}
ansRun()

let score = document.querySelector("#score")
let addScore = 1

document.querySelector(".mainWindow").addEventListener("click", function (details) {
    let clickedNum = Number(details.target.textContent)

    if (clickedNum === answer) {
        letOne.innerHTML = genrateNum();
        letTwo.innerHTML = genrateNum();
        genrateOperater();
        ansRun()
        fakebtn()
        score.innerHTML = addScore++
    } else {
        letOne.innerHTML = genrateNum()
        letTwo.innerHTML = genrateNum()
        genrateOperater();
        ansRun()
        fakebtn() 
        score.innerHTML = addScore - 2
    }
})

// fake otions code

function fakebtn() {

    let fakeOne = document.querySelector(".fakeOne");
    fakeOne.innerHTML = genrateNum();

    let fakeTwo = document.querySelector(".fakeTwo");
    fakeTwo.innerHTML = genrateNum();

    let fakeThree = document.querySelector(".fakeThree");
    fakeThree.innerHTML = genrateNum();
}

fakebtn()