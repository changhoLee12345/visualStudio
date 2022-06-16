// constructorFunc.js

function Estimate(param) {
    this.unit = param;
    this.getEstimate = function (unitType, width, height) {
        let priceInfo = this.unit.find(item => item.type == unitType)
        return priceInfo.price * width * height;
    }
    this.addUnit = function (unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [{
    type: 'wood',
    price: 100
}, {
    type: 'iron',
    price: 300
}, {
    type: 'plastic',
    price: 200
}];

let estim = new Estimate(unitInfo);
let result = estim.getEstimate('wood', 20, 20);
console.log(result);