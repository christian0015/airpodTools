
AOS.init();

function toggleAirPods() {
    const airpods = document.querySelector('.airpods-case');
    const lid = document.querySelector('.lid');
    const leftAirPod = document.querySelector('.left-airpod');
    const rightAirPod = document.querySelector('.right-airpod');

    const isOpen = airpods.classList.contains('open');

    if (isOpen) {
        // Fermer les AirPods
        lid.style.transform = 'rotateX(0deg)';
        leftAirPod.style.transform = 'translateY(0px)';
        rightAirPod.style.transform = 'translateY(0px)';
    } else {
        // Ouvrir les AirPods
        lid.style.transform = 'rotateX(90deg)';
        leftAirPod.style.transform = 'translateY(50px)';
        rightAirPod.style.transform = 'translateY(50px)';
    }

    // Inverser la classe "open" pour suivre l'état actuel
    airpods.classList.toggle('open');
}

// Appel de la fonction au chargement de la page (ou à un autre moment approprié)
document.addEventListener('DOMContentLoaded', () => {
    const airpods = document.querySelector('.airpods-case');
    airpods.addEventListener('click', toggleAirPods);
});


function openAirPods2() {
    const AirPod = document.querySelector('#imgAirpodOpen');
    const rightAirPod = document.querySelector('#imgAirpodOreilR');
    const leftAirPod = document.querySelector('#imgAirpodOreilL');

    AirPod.style.display = "none";
    rightAirPod.style.display = "flex";
    leftAirPod.style.display = "flex";
}



function openAirPods3() {
    const AirPod = document.querySelector('#imgAirpodOpen');
    const rightAirPod = document.querySelector('#imgAirpodOreilR');
    const leftAirPod = document.querySelector('#imgAirpodOreilL');

    AirPod.style.display = "block";
    rightAirPod.style.display = "none";
    leftAirPod.style.display = "none";
}

document.getElementById('connectButton').addEventListener('click', function () {
    if ('bluetooth' in navigator) {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        })
            .then(device => {
                console.log('Connected to device:', device.name || 'Unknown Device');
                // Ajoutez ici le code pour interagir avec le périphérique Bluetooth
            })
            .catch(error => {
                console.error('Error connecting to Bluetooth device:', error);
            });
    } else {
        console.error('Bluetooth not supported in this browser.');
    }
});