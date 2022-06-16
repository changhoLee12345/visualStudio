class Basket {
    constructor() {
        this.products = [];
    }
    static get HOUR() {
        return 4;
    }
    static dueTime() {
        const deliveryMsg = new Date().toISOString().substring(0, 10) + ' 오후' + this.HOUR + '시 이전 주문 당일 발송';
        return deliveryMsg;
    }
    addBasket(pid, productName, price, num) {
        this.products.push({
            pid,
            productName,
            price,
            num
        })
    }
    deleteBasket(pid) {
        const idx = this.products.findIndex(item => item.pid == pid);
        if (idx) {
            this.products.splice(idx, 1);
        }
    }
}

console.log(Basket.HOUR);
console.log(Basket.dueTime());

const b = new Basket();
// console.log(b.HOUR);
// console.log(b.dueTime());
// Basket.addBasket(101, 'Sample', 1000, 1);