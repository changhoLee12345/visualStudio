let p1 = {
    name: 'i-pad',
    price: 2000,
    quantity: 2,
    order: function () {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log('order price: ' + this.amount);
    },
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }
        console.log((100 * rate) + '% discounted');
    }
}