// call vs. apply function.

const animals = [{
        species: 'Lion',
        name: 'King'
    },
    {
        species: 'Whale',
        name: 'Fail'
    }
];

// call.
console.log('call >>>')
for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

// apply.
console.log('\napply >>>')
for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).apply(animals[i], [i]);
}

console.clear();

function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

const obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
};

greet.call(obj);