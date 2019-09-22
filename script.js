`use strict`;

const button = document.getElementById('enter');
const input = document.getElementById('usrinput');
const ul = document.querySelector('ul');
let li;


function CreateTextNodeLi() {
    li = document.createElement('li');
}

function CreateElementLi() {
    li.append(document.createTextNode(input.value));
}

function InsertLi() {
    ul.insertAdjacentElement('beforeend', li);
}

function addLiEnter(Enter) {
    if ( input.value.length > 0 && (Enter.keyCode === 13) ) {
        functionGeneral();
    }
}

function addLiClick() {
    if ( input.value.length > 0 ){
        functionGeneral();
    }
}

function functionGeneral() {
    CreateTextNodeLi();
    CreateElementLi();
    InsertLi();
    input.value = "";
}

button.addEventListener("click", addLiClick);
input.addEventListener("keypress", addLiEnter);