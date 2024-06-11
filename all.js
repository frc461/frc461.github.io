const isDarkMode = () => localStorage.is_dark_mode == "true";
const setDarkMode = dark_mode => localStorage.is_dark_mode = dark_mode;
    
function toggle_dark_mode() {
    setDarkMode(!isDarkMode())

    if (isDarkMode()) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
}

document.addEventListener('DOMContentLoaded', ev => {
    if (isDarkMode()) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.add("light-mode")
    }
});