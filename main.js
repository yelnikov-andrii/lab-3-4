document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__link');
    const currentUrl = window.location.pathname;
    console.log(currentUrl, 'url');
    const currentUrlArr = currentUrl.split('/');

    links.forEach(link => {
        if(link.getAttribute('href') === currentUrlArr[currentUrlArr.length - 1]) {
            link.classList.add('active');
        }
    })
})