/*
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/picture1.JPG') {
        myImage.setAttribute ('src', 'images/picture2.JPG');
    } else {
        myImage.setAttribute ('src', 'images/picture1.JPG');
    }
*/

$(document).ready(function() {
    $("img").draggable();
    $("button").click(function () {
        $("h2").after("<b>挿入された要素です</b>");
    });
});

/*
$(function () {
    $("img").draggable();
    $("h4").droppable({
        drop: function (event, ui) {
            $(this)
            .addClass("ui-state-highlight")
            .find("img")
            .html("Dropped!");
        }
    });
});
*/



/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
*/