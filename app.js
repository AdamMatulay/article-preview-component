const shareButton = document.getElementById('share-button');
const articleAuthor = document.querySelector('.article-author');
const articleFooter = document.querySelector('.article-footer');
const shareOverlay = document.getElementById('share-overlay');

function toggleShareOverlay() {
    articleFooter.classList.toggle('footer-active');
    articleAuthor.classList.toggle('hidden');
    shareOverlay.classList.toggle('active');
}

shareButton.addEventListener('click', toggleShareOverlay);