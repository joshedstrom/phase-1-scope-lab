var customerName = 'bob';
const leastFavoriteCustomer = 'me';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'anna'
}