const toggle = document.getElementById("toggle-btn");
const dropdownMenu  = document.getElementById("dropdown");

toggle.addEventListener("click", function() {
    console.log("you click me");
    if (dropdownMenu.style.display == "none" || dropdownMenu.style.display == ""){
        dropdownMenu.style.display = "block";
    }
    else {
        dropdownMenu.style.display = "none";
    }
})