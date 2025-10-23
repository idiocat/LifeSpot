//greeting
let userInfo = new Map();
function greeting() {
    userInfo.set("age", Number(prompt("What's your age again?")));
    if (userInfo.get("age") < 18) { alert("Таким как ты здесь не место."); window.location.href = "https://www.google.com" }
    else { alert(`What the hell did you forget here at ${userInfo.get("sessionStart")}?`) }
    return userInfo
}
function getInfo() {
    userInfo.set("sessionStart", new Date().toLocaleString());
    userInfo.set("browser", window.navigator.userAgent);
}

const logging = () => { for (let info of userInfo) { console.log(info) } }

const subscribe = () => alert("You've been browsing for a while.\nYou should get up and stretch.");

//searcj
function searcjFunk() {
    let videos = document.getElementsByClassName('video-container');

    for (let video of videos) {
        let desc = video.querySelector('h3').innerText.toLowerCase().slice(0, -1); //removes the dot at the end of description
        if (!desc.includes(inputer())) { video.style.display = 'none' }
        else { video.style.display = 'inline-block' }
    }
}

const inputer = () => document.querySelector('.searcj-querry').value.toLowerCase();

const fatBodyArrowFunction = (a, b, c) => a + b + c;