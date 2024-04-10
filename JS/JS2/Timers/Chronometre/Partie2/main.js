let seconds = 0;
let minutes = 0;
let chronoElement;

function updateChrono() {
    seconds++;
    
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    
    const minutesDisplay = minutes.toString().padStart(2, '0');
    const secondsDisplay = seconds.toString().padStart(2, '0');

    chronoElement.innerText = `${minutesDisplay} minute(s) ${secondsDisplay} seconde(s)`;

    window.setTimeout(updateChrono, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    chronoElement = document.querySelector('#chrono');

    window.setTimeout(updateChrono, 1000);
});
