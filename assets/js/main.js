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
const calc = (pay, month, sum, num) => {
    const prices = document.querySelectorAll('.price');
    const payToman = document.getElementById('pay-toman');
    const months = document.getElementById('months');
    const dash = input => input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    months.textContent = month;
    payToman.textContent = dash(pay);
    num = +month;
    sum = dash(pay * num);
    for (const price of prices) {
        price.textContent = sum;
    }
}
pay.addEventListener('input', () => {
    calc(pay.value, month.value, sum, num);
});
month.addEventListener('input', () => {
    calc(pay.value, month.value, sum, num);
});