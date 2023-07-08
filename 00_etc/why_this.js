// this.

this.x = 9; // 'this' refers to global 'window' object here in a browser
const module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
console.log(retrieveX());
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
console.log(boundGetX());
//  returns 81