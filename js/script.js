function getTime() {
    try {
        const time = document.querySelector('input[name="timeOptions"]:checked').value;
        sessionStorage.setItem("time", time);
    } catch (e) {
        alert("Please select time to continue")
        return -1
        
    }
}

function vent() {
    if (getTime() != -1) {
        window.location = "vent.html"
    }
    
    
}

function meditate() {
    if (getTime() != -1) {
        window.location = "meditate.html"
    }

}
