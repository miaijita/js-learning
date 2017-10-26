const Person = require('./Person')

function _makeFriendsWith(person1, person2) {
  person1.friends.push(person2);
  person2.friends.push(person1);
}
function _matchFriend(person1, person2) {
  for (let interest of person1.interests) {
    if (person2.interests.includes(interest)) {
      _makeFriendsWith(person1, person2)
      console.log(`!MATCHED! ${person2.name} and ${person1.name} are potential lovers ♥ ♥ ♥`)
    }
  }
}

exports.createPeopleAndMatch = () => {
  let personList = []
  person7 = new Person('Mia', 30);
  person8 = new Person('Jana', 33);
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
  personList.push(person7)
  personList.push(person8)
  personList.push(person9)
  personList.push(person10)

  // Display Names of all people
  instructors = personList
  instructors.forEach(_printName)

  // Match people
  _matchFriend(person7, person8)
  _matchFriend(person7, person9)
  _matchFriend(person7, person10)

}

function _printName(person) {
  return person.sayName();
}



