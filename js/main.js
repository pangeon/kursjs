const button = document.createElement("button");
button.innerHTML = "Powitanie";
document.body.appendChild(button);

button.addEventListener("click", function() {
    alert("Witaj na mojej stronie!");
});
