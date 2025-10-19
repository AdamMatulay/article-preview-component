const shareButton = document.getElementById('share-button');
const shareOverlay = document.getElementById('share-overlay');
const articleFooter = document.querySelector('.article-footer');



export function toggleShareOverlay() {
    shareButton.addEventListener('click', toggleShareOverlay);
    articleFooter.classList.toggle('active');
    console.log('Share Overlay Activated');
}