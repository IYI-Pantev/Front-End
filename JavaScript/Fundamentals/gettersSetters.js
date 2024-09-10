const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName (value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// getters => access properties
// setters => change them

console.log(person.fullName)
person.fullName = 'Krum Strashni';
console.log(person.fullName)
