/*
Create a class `Person` which has :
* a constructor which initialize three attributes in this order : name (string), age (number) and weeaboo (boolean)
* a method `introduce` which returns "My name is {name} and I am {age}", where {name} and {age} are replaced with their respective attributes
* a method `greets` which receives a name (string) as parameter and returns "Hello {name}" if `weeaboo` is false, and "Ohayo {name}-chan" if `weeaboo` is true
* a method `match` which receives a person (Person) as parameter and returns true if the current `weeaboo` and argument `weeaboo` attributes are the same
*/

// TODO add your code here

class Person {
  constructor(name, age, weeaboo) {
    this.name = name;
    this.age = age;
    this.weeaboo = weeaboo;
  }
  introduce = () => {
    return `My name is ${this.name} and I am ${this.age}`;
  };

  greets = (name) => {
    if (this.weeaboo === true) {
      return `Ohayo ${name}-chan`;
    } else {
      return `Hello ${name}`;
    }
  };

  match(Person) {
    if (this.weeaboo === Person.weeaboo) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Person;
