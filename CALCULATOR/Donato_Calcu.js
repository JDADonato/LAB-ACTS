const colors = [
    ["#56ccf2", "#2f80ed"],
    ["#ff9a9e", "#fad0c4"],
    ["#a18cd1", "#fbc2eb"],
    ["#ffdde1", "#ee9ca7"],
    ["#96fbc4", "#f9f586"],
    ["#84fab0", "#8fd3f4"]
];

function display(value) {
    document.getElementById("display").value += value;
    changeBackground();
}

function clearDisplay() {
    document.getElementById("display").value = "";
    changeBackground();
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    changeBackground();
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
    changeBackground();
}

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = `linear-gradient(135deg, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
}
