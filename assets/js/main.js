const support = document.getElementById('support');
const pay = document.getElementById('pay');
const smPay = document.getElementById('pay-sm');
const month = document.getElementById('month');
const smMonth = document.getElementById('month-sm');
let sum = 100000;
let num = 3;
const calc = (textPay, textMon, textPrice, pay, month, sum, num) => {
    const prices = document.querySelectorAll(`.${textPrice}`);
    const payToman = document.getElementById(textPay);
    const months = document.getElementById(textMon);
    const dash = input => input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    months.textContent = month;
    payToman.textContent = dash(pay);
    num = +month;
    sum = dash(pay * num);
    for (const price of prices) {
        price.textContent = sum;
    }
}
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    scrollY >= 30 ? nav.classList.add('nav-active') : nav.classList.remove('nav-active');
});
support.addEventListener('click', () => {
    const icons = document.querySelectorAll('.links');
    for (const icon of icons) icon.classList.toggle('scale');
});
pay.addEventListener('input', () => {
    calc('pay-toman', 'months', 'price', pay.value, month.value, sum, num);
});
month.addEventListener('input', () => {
    calc('pay-toman', 'months', 'price', pay.value, month.value, sum, num);
});
smPay.addEventListener('input', () => {
    calc('pay-toman-sm', 'months-sm', 'price-sm', smPay.value, smMonth.value, sum, num);
});
smMonth.addEventListener('input', () => {
    calc('pay-toman-sm', 'months-sm', 'price-sm', smPay.value, smMonth.value, sum, num);
});