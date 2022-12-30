"use strict";
/* Classes */
class Employee {
    constructor(id, name, address) {
        (this.id = id), (this.name = name), (this.address = address);
    }
    getNameWithAddres() {
        return `${this.name} ${this.address}`;
    }
}
let john = new Employee(1, "lucas", "Rua Ferreiar de Oliveia 74");
let address = john.getNameWithAddres();
console.log(john);
console.log(address);
