/* Classes */

class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id,
        this.name = name,
        this.address = address
    }
}

let john = new Employee(1, 'lucas', 'Rua Ferreiar de Oliveia 74');

console.log(john);