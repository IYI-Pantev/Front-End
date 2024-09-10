
const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating...');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking...');
    }
};

const canSwim = {
    swim: function() {
        console.log('swimming...')
    }
}

function Person() {

}

Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {

}
Object.assign(Goldfish, canEat, canSwim);

f = new Goldfish();
console.log(f);
