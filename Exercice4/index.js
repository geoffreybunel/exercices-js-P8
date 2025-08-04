const btn = document.getElementById("myButton");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = "Bonjour, vous avez cliqué sur le bouton !";

    body.append(p);
})