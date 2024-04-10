let chrono = 0;
let chronoElement;

function updateChrono() {
    chrono++;
    chronoElement.innerText = chrono;
    
    window.setTimeout(updateChrono, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    chronoElement = document.querySelector('#chrono');

    window.setTimeout(updateChrono, 1000);
});
