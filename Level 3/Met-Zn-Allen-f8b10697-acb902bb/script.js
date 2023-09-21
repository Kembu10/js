document.querySelector("h1").innerText = document.title;

const paragrafen = document.querySelectorAll('p');

paragrafen.forEach(
    function (e) {
        e.style.color = "blue";
    },
);