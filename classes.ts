/* Classes */

class Employee {
  id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    (this.id = id), (this.name = name), (this.address = address);
  }

  getNameWithAddres(): string {
    return `${this.name} ${this.address}`
  }
}

let john = new Employee(1, "lucas", "Rua Ferreiar de Oliveia 74");
let address = john.getNameWithAddres();

console.log(john);
console.log(address)
