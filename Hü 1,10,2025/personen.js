class Person {
  constructor(name, geburtsdatum) {
    this.name = name;
    this.geburtsdatum = geburtsdatum;
  }
}

const personen = [
  new Person("Max", "2006-05-14"),
  new Person("Anna", "2007-03-22"),
  new Person("Lukas", "2005-12-01")
];

// Damit du eine Tabelle im Terminal siehst 👇
console.table(personen);
