// this.

let obj = {};

obj.act = function () {
    this.value = 'default value';

    function innerAction() {
        this.value = 'innerAct value';
        console.log("this.value: " + this.value);
    }

    function innerReaction(caller) {
        caller.value = 'innerReact value';
        console.log('this.value: ' + this.value);
        console.log('caller.value: ' + caller.value);
    }
    console.log('-----------------')
    innerAction();
    console.log('obj this.value: ' + this.value);

    console.log('-----------------')
    innerReaction(this);
    console.log('log this.value: ' + this.value)
}
obj.act();
console.log('-----------------')
console.log('global this.value: ' + this.value);