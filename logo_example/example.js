// script.js

document.addEventListener('DOMContentLoaded', () => {
    const qrCode = document.getElementById('qr-code');
    const gReplacement = document.getElementById('g-replacement');

    // Initial delay to simulate loading time
    const initialDelay = 5000; // 5 seconds

    setTimeout(() => {
        // Replace 'G' with QR code after initial delay
        gReplacement.classList.add('hidden');
        qrCode.classList.remove('hidden');

        // Additional delay for QR code appearance
        const qrAppearanceDelay = 2000; // 2 seconds

        setTimeout(() => {
            // Move and grow QR code after it appears
            qrCode.classList.add('moved');
        }, qrAppearanceDelay);

    }, initialDelay);
});
