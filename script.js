const amount = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const p = document.querySelector('.cost-info')
const span = document.querySelector('.cost')

const checkBill = () => {
    
    if (amount.value == '' || tip.value ==0) {
        error.textContent = 'Fill all the fields!';
        p.style.display = 'none';
    } else {
        error.textContent = '';
        countBill()
     }
}

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    
    span.textContent = sum.toFixed(2)
    p.style.display = 'block';

}

btn.addEventListener('click', checkBill)