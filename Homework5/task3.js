class Person {
    constructor (name, surname,) {
        this.name = name;
        this.surname = surname;
}
    showFullName(){
        const {name, surname} = this;
    return `${name} ${surname}`;
    }
}

// let newPerson = new Person ('John', 'Wick');

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname)
        this.year = year;
    }
    showFullName(midName){
        const {name, surname} = this;
        return `${name} ${surname} ${midName}`;
    }
    showCourse(){
        
        return (new Date().getFullYear() - this.year);
    }
}

let newStud = new Student ('Lando', 'Norris', 2019);
console.log(newStud.showFullName('Adam'));
console.log('Current course ' + newStud.showCourse());

