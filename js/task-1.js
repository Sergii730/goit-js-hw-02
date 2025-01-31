function makeTransaction(quantity, pricePerDroid, customerCredits) {
  totalPrice = quantity * pricePerDroid;
  return totalPrice > customerCredits
    ? 'Insufficient funds!'
    : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
makeTransaction(5, 3000, 23000);
makeTransaction(3, 1000, 15000);
makeTransaction(10, 5000, 8000);
makeTransaction(8, 2000, 10000);
makeTransaction(10, 500, 5000);

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
