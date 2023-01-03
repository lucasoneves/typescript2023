/* Classes */

class Employee {
  #id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    (this.#id = id), (this.name = name), (this.address = address);
  }

  get emplId() {
    return this.#id
  }

  set emplId(id) {
    this.#id = id
  }

  getNameWithAddres(): string {
    return `${this.name} ${this.address}`
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address)
  }
}

let john = new Employee(1, "lucas", "Rua Ferreiar de Oliveia 74");
let address = john.getNameWithAddres();

console.log(john);
console.log(address)

john.emplId = 100
john.emplId = 233

console.log('ID de john', john.emplId)