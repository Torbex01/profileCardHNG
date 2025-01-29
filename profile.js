// update UTC Time
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTimeString = now.toUTCString().split(" ")[4]; 
    utcTimeElement.textContent = utcTimeString;
}
updateUTCTime();

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");

   
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
});


window.addEventListener("load",  () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
});
