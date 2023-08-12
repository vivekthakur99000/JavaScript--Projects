const colors = ["#FF5733", "#33FFA1", "#3366FF", "#FF33E9", "#33FF33"];

// Function to set a random color
function setRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Attach event listener to the button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", setRandomColor);