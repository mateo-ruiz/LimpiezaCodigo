const btnChangeColor = document.getElementById("btnChangeColor");
const box = document.getElementById("box");

function changeColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    box.style.backgroundColor = color;
    
    return color;
}

btnChangeColor.addEventListener("click", () => changeColor());
