function showOtzyvForm() {
    let otzyv = {};
    otzyv['time'] = new Date().toLocaleString();
    author = prompt("What's your name again?").trim();
    otzyv['author'] = author == null || author == '' ? "Anon" : author;
    text = prompt("Tell me more.").trim();
    otzyv['text'] = text == null || text == '' ? "This website is very super cool!" : text;
    return otzyv
}

const postOtzyv = otzyv => document.querySelector('.otzyvs').innerHTML += `
    <div class="otzyv">
    <p class="otzyv-author">${otzyv['author']}</p>
    <p class="otzyv-time">${otzyv['time']}</p>
    <p class="otzyv-text">${otzyv['text']}</p>
    </div>
`;