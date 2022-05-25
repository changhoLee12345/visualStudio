// basic.js
class Food {
    constructor(food) {
        this.food = food;
    }
    getFood() {
        return this.food;
    }
    set eat(food) {
        this._food = food;
    }
    get eat() {
        return this._food;
    }
}

let food = new Food('app');
// food.eat = 'apple';

console.log(food.getFood());