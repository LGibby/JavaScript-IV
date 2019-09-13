// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.location = personAttributes.location;
        this.speak = personAttributes.speak(){
            return `Hello my name is ${this.name}, I am from ${this.location}`;
        }
    }
}

class Instructor extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.specialty = personAttributes.specialty;
        this.favLanguage = personAttributes.favLanguage;
        this.catchPhrase = personAttributes.catchPhrase;
        this.demo = personAttributes.demo('subject'){
            console.log(`Today we are learning about ${subject}`);
        }
        this.grade = personAttributes.grade(Student,'subject'){
            console.log(`${Student.name} receives a perfect score on ${subject}`)
        };
    }
}

class Student extends Person {
    constructor(personAttributes){
        super(personAttributes)
        this.previousBackground =
    }
}