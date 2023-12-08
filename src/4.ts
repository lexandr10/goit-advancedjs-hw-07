// Ключ(Key): Створіть клас Key.У нього має бути одна приватна властивість signature,
//     яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()).

// Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина(Person): Створіть клас Person.Конструктор цього класу приймає
// об'єкт класу Key і зберігає їх у приватному властивості key.
// Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім(House): Створіть абстрактний клас House.Цей клас має дві властивості: door, яка може бути відкрита(true)
//     , або закрита(false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод
// comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита.Ваш абстрактний клас House
// також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок(MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
// Реалізуйте метод openDoor у цьому класі.Якщо ключ, переданий цьому методу, збігається з ключем,
//     збереженим як key, то двері відчиняються.

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSign(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key;
  }
  getKey() {
    return this.key;
  }
}
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }
  abstract openDoor(key: Key);
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Open door");
    } else {
      console.log("Sorry door close");
    }
  }
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSign() === this.key.getSign()) {
      this.door === true;
      console.log("Open door");
    } else {
      console.log("Key not correct");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
