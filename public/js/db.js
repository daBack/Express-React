'use strict';

let name = document.getElementById('db-name');
let dumhet = document.getElementById('db-dumhet');
let cool = document.getElementById('db-cool');
let dbAdd = document.getElementById('db-add');
let dbRemove = document.getElementById('db-remove');
let dbShow = document.getElementById('db-show');

/*
 *  Functions for Eventlisteners
 */

let showCollection = async () => {
    let response = await fetch('/mongodb/find');
    let test = await response.json();

    for (var i = 0; i < test.length; i++) {
        dbShow.innerHTML += '<p>Namn: ' + test[i].name + '| Dumhet: ' + test[i].dumhet +
        '| Är du cool?: ' + test[i].cool +  '</p>';
    }
};

let remove = async () => {
    let response1 = await fetch('/mongodb/drop');

    return response1;
};

let add = async () => {
    let response2 = await fetch('/mongodb/insert/[{"name":"' + name.value +
    '","dumhet":"' + dumhet.value + '","cool":"' + cool.value + '"}]');

    return response2;
};


/*
    EventListeners
 */
dbRemove.addEventListener("click", () => {
    remove();
});

dbAdd.addEventListener("click", () => {
    add();
});

/*
Starting of all functions
 */
showCollection();
