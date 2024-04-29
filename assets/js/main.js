window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    scrollY >= 30 ? nav.classList.add('nav-active') : nav.classList.remove('nav-active');
});