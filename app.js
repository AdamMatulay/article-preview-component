const shareButton = document.getElementById('share-button');
const shareOverlay = document.querySelector('.share-overlay');

function toggleShareOverlay() {
    shareOverlay.classList.toggle('hidden');
}

shareButton.addEventListener('click', toggleShareOverlay);