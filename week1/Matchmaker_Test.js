Person = class {
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

  makeFriendsWith(person) {
    this.friends.push(person);
    person.friends.push(this);
  }
  matchFriend(person) {
    for (let interest of this.interests) {
      if (person.interests.includes(interest)) {
        this.makeFriendsWith(person)
        console.log(`${person.name} and ${this.name} are potential lovers`)
      }
    }
  }
}

person7 = new Person('Mia', 30);
person8 = new Person
  ('Jana', 33);
person9 = new Person('Brian', 34);
person10 = new Person('Ishan', 29);


// person7.makeFriendsWith(person8);

person7.addInterest('music')
person7.addInterest('football')

person8.addInterest('music')
person7.addInterest('dance')

person10.addInterest('football')

person9.addInterest('cooking')
person9.addInterest('fishing')

person7.matchFriend(person8)
person7.matchFriend(person9)
person7.matchFriend(person10)

instructors = [person7, person8];

//person7.sayName();
//person8.sayName();

// printName = (person) => person.sayName();

function printName(person) {
  return person.sayName();
}

instructors.forEach(printName);
