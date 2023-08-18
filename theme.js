const theme = document.getElementById("theme");
const body = document.querySelector(".body");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

console.log(getComputedStyle(body).backgroundColor);  // Use getComputedStyle to get the actual computed style

theme.addEventListener("click", function() {
    // Compare color using a case-insensitive comparison and without the hash symbol
    if (getComputedStyle(body).backgroundColor.toLowerCase() === "rgb(39, 40, 41)") {
        theme.innerHTML = `<i class="fa-solid fa-sun" style="color: #4e4e4e;></i>`
        changeBackgroundColor("#F5FEFD");
    }
    else  {
        theme.innerHTML = "";
        changeBackgroundColor("#272829");
    }
});