var customerName = 'bob';

function upperCaseCustomerName() {
 customerName = `BOB`;
 return customerName;
};

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer;
}
const leastFavouriteCustomer ='bob';
function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = 'kira'
    return leastFavouriteCustomer;
}