console.log("Hello World!");

const messaggio = document.querySelector("p");

document.querySelector("button").addEventListener("click", () => {
    messaggio.innerHTML = messaggio.innerHTML.toUpperCase();
});

document.querySelectorAll("button")[1].addEventListener("click", () => {
    messaggio.innerHTML = messaggio.innerHTML.toLowerCase();
});

document.querySelector("#sposta").addEventListener("click", () => {
    const primaParte = messaggio.innerText.substring(0, 5);
    const secondaParte = messaggio.innerText.substring(5);
    messaggio.innerText = secondaParte + primaParte;
});
