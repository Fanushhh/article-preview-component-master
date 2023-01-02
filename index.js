
const shareButton = document.querySelector('.socials__container--share');
const sharePanel = document.querySelector('.share-panel');

shareButton.addEventListener('click', function(){
    sharePanel.classList.toggle('show');
    
})