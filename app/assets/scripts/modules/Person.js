class Person {
    

    constructor(name, age, tax) {
        this.name = name;
        this.age = age;
        this.tax = age * 10;
    }

    greet() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

export default Person