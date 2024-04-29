const support = document.getElementById('support');
const pay = document.getElementById('pay');
const month = document.getElementById('month');
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    scrollY >= 30 ? nav.classList.add('nav-active') : nav.classList.remove('nav-active');
});
support.addEventListener('click', () => {
    const icons = document.querySelectorAll('.links');
    for (const icon of icons) icon.classList.toggle('scale');
});
let sum = 100000;
let num = 3;
pay.addEventListener('input', () => {
    const prices = document.querySelectorAll('.price');
    const payToman = document.getElementById('pay-toman');
    const dash = input => input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    payToman.textContent = dash(pay.value);
    sum = dash(pay.value * num);
    for (const price of prices) {
        price.textContent = sum;
    }
});
month.addEventListener('input', () => {
    const prices = document.querySelectorAll('.price');
    const months = document.getElementById('months');
    const dash = input => input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    num = +month.value;
    sum = dash(pay.value * num);
    months.textContent = month.value;
    for (const price of prices) {
        price.textContent = sum;
    }
});