const button = document.getElementById("enter");
const button = document.getElementById("usrinput");
const ul = document.querySelector("ul");
const li = document.createElement("li");

function inputlength(){
    return input.value.length;
}

function addTextNode(){
    li.insertAdjacentText("beforeend", document.createTextNode(input,value));
}

function resetInput(){
    input.value ="";
}