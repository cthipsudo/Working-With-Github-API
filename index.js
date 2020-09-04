/* eslint-disable quotes, indent */
'use strict';

function makeList(userData) {
    const repoList = [];
    for (let i = 0; i < userData.length; i++) {
        repoList.push(`<li><a href="${userData[i].url}">${userData[i].name}</a></li>`);
    }
    console.log(repoList);
    $(`#results`).html(repoList);
}

function handleSubmit() {
    $(`form button[type="submit"]`).on('click', event => {
        event.preventDefault();
        console.log("I Click");
        let user = $(`form input#username`).val();
        fetch(`https://api.github.com/users/${user}/repos`).then(myRequest => {
            return myRequest.json();
        }).then(myData => {
            //console.log(myData);
            makeList(myData);
        });
    });
}
function main() {
    handleSubmit();
}

$(main);