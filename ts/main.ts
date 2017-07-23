class Person {

    constructor(public firstName: string,
        public lastName: string, public age: number,
          public ssn: string) {
    }
}

var p = new Person("John", "Lee", 29, "123-90-4567");
console.log("Last name: " + p.lastName + " SSN: " + p.ssn);