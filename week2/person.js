class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.interests = [];
    this.friends = [];
  }

  sayName() {
    console.log(this.name);
  }

  addInterest(interest) {
    this.interests.push(interest)
  }
}

module.exports =  Person;

