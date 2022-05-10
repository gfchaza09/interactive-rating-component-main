"use strict";

let rating = "";
let finalMessage = "";

const cardThankYou = document.querySelector(".card--thank-you");
const formRating = document.querySelector(".form");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const btnSend = document.getElementById("btnSend");

const message = document.getElementById("message");

const resetColor = (btnArr) => {
    for (let i=0; i<4; i++) {
        btnArr[i].classList.remove("select");
    }
};

btn1.addEventListener("click",(e)=>{
    e.preventDefault();

    btn1.classList.add("select");
    resetColor([btn2,btn3,btn4,btn5]);
    rating = btn1.textContent;
});

btn2.addEventListener("click",(e)=>{
    e.preventDefault();

    btn2.classList.add("select");
    resetColor([btn1,btn3,btn4,btn5]);
    rating = btn2.textContent;
});

btn3.addEventListener("click",(e)=>{
    e.preventDefault();

    btn3.classList.add("select");
    resetColor([btn2,btn1,btn4,btn5]);
    rating = btn3.textContent;
});

btn4.addEventListener("click",(e)=>{
    e.preventDefault();

    btn4.classList.add("select");
    resetColor([btn2,btn3,btn1,btn5]);
    rating = btn4.textContent;
});

btn5.addEventListener("click",(e)=>{
    e.preventDefault();

    btn5.classList.add("select");
    resetColor([btn2,btn3,btn4,btn1]);
    rating = btn5.textContent;
});

btnSend.addEventListener("click",(e)=>{
    e.preventDefault();

    if(rating !== "") {
        finalMessage = `You selected ${rating} out of 5`;
        message.textContent = finalMessage;
        
        cardThankYou.classList.add("show");
        formRating.classList.add("hide");
    }
})