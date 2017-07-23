var Person = (function () {
    function Person(firstName, lastName, age, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
    }
    return Person;
}());
var p = new Person("John", "Lee", 29, "123-90-4567");
console.log("Last name: " + p.lastName + " SSN: " + p.ssn);
