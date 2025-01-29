// Function to Update UTC Time
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTimeString = now.toUTCString().split(" ")[4]; // Extract HH:MM:SS
    utcTimeElement.textContent = utcTimeString;
}

// Update time every second
updateUTCTime();
setInterval(updateUTCTime, 1000);

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");

    // Save user preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
});

// Load Dark Mode preference from localStorage
window.addEventListener("load",  () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
});
