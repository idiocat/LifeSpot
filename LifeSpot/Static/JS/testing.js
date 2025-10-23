document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("What's your name? ");
    alert(`Huh! ${name} is a silly name with ${name.length} silly letters in it!`);

    let elements = document.getElementsByTagName('*');
    alert(`There're ${elements.length} elements on this page for some reason.`);

    let arr = [1, 2, 3]
    arr.forEach(function (item) { console.log(item) });
})