// script.js

document.addEventListener('DOMContentLoaded', () => {
    const qrCode = document.getElementById('qr-code');
    const logoText = document.getElementById('logo-text');

    setTimeout(() => {
        // Start QR code animation
        qrCode.style.opacity = '1';
        
        // Animate and remove logo text
        logoText.style.opacity = '0';
        setTimeout(() => {
            logoText.style.display = 'none';
        }, 5000); // same duration as the transition in CSS

        // Expand QR code
        setTimeout(() => {
            qrCode.style.transform = 'scale(2)'; // Adjust scaling as needed
        }, 5000);
    }, 1000); // Delay before animation starts
});
