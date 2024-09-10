const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName (value) {
        if (typeof value !== 'string') /*return*/ // 1st way;
            throw new Error('fname lname -needed')
        const parts = value.split(' ');
        if (parts.length < 2)
            throw new Error('enter first and last name.')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person.fullName = ''; // > ? 
}
catch (e) {
    alert(e);
}

console.log(person);