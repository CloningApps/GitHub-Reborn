// Toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Show the current date
function showDate() {
    const dateDisplay = document.getElementById('date-display');
    const date = new Date();
    dateDisplay.innerHTML = `Current Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
