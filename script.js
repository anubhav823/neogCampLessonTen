let button = document.querySelector('#submit-btn');
let output = document.querySelector('#result')
let cost_price_input = document.querySelector('#cost-price')
let quantity_input = document.querySelector('#quantity')
let selling_price_input = document.querySelector('#selling-price')

button.addEventListener('click', calculateProfitOrLoss)

function calculateProfitOrLoss() {
    changeDataTypes();
    if (validateInputs()) {
        cost_price_input.innerText='';
        selling_price_input.innerText = '';
        quantity_input.innerText ='';
        if (cost_price > selling_price) {
            output.classList.add('loss-glow');
            output.innerText = calculateLoss()
        } else if (cost_price < selling_price) {
            output.classList.add('profit-glow');
            output.innerText = calculateProfit()
        } else if (cost_price == selling_price) {
            output.innerText = 'You sold your shares at price. No profit or loss for you.'
        }
    } else {
        output.innerText = 'Please enter numerical inputs'
    }
}

function calculateProfit() {
    let profit = (selling_price - cost_price) * quantity;
    let investment = cost_price * quantity;
    let totalReturn = (profit / investment) * 100;
    return `You made a profit of ₹${profit.toFixed(2).toString()}! This means a return of ${totalReturn.toFixed(2).toString()}% on your total investment of ₹${investment.toFixed(2).toString()}! Bravoo!!`
}
function calculateLoss() {
    let loss = (cost_price - selling_price) * quantity;
    let investment = cost_price * quantity;
    let totalReturn = (loss / investment) * 100;
    return `You made a loss of ₹${loss.toFixed(2).toString()}! This means a return of -${totalReturn.toFixed(2).toString()}% on your total investment of ₹${investment.toFixed(2).toString()}! Bad luck!!`
}
function changeDataTypes() {
    cost_price = Number(cost_price_input.value)
    quantity = Number(quantity_input.value)
    selling_price = Number(selling_price_input.value)
}

function validateInputs() {
    if (isNaN(cost_price) || isNaN(quantity) || isNaN(selling_price)) {
        return false;
    }
    return true;
}