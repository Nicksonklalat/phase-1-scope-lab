// Write your solution in this file!

// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName(){
    window.customerName = customerName.toUpperCase()
}
function setBestCustomer(){
    let bestCustomer = "not bob"
    window.bestCustomer = bestCustomer
}
function overwriteBestCustomer(){
    let overwrites = "maybe bob"
    window.bestCustomer = overwrites
}
const least = "Alice"
function changeLeastFavoriteCustomer(){
    least = "bob"
}
