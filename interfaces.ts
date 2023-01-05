// Creating interfaces

interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "Lucas", id: 9, email: "lucasneves17@outlook.com"}

interface Employeer extends User {
  salary: number
}

let employee : Employeer = {name: "Lucas", id: 2, email: "luc@g.com", salary: 2000 }