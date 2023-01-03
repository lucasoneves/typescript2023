"use strict";
/* Classes */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        (__classPrivateFieldSet(this, _Employee_id, id, "f")), (this.name = name), (this.address = address);
    }
    get emplId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set emplId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddres() {
        return `${this.name} ${this.address}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let john = new Employee(1, "lucas", "Rua Ferreiar de Oliveia 74");
let address = john.getNameWithAddres();
console.log(john);
console.log(address);
john.emplId = 100;
john.emplId = 233;
console.log('ID de john', john.emplId);
