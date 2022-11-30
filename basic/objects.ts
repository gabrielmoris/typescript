const User = {
  name: "Gabriel",
  email: "gabriel@gmail.com",
  isActive: true,
};

//When I use an object as an argument I specify the type of each key
function createUser({}: { name: string; isPaid: boolean }) {}

createUser({ name: "gabriel", isPaid: false });

//I n the case a function returns an Object

function createCourse(): { name: string; price: number } {
  return { name: "typeScript", price: 15 };
}

//It is curious that when I do a variable with an object I am able to add parametters to the function and it doesn´t complain!

const newUser = { name: "gabriel", isPaid: false, email: "gabriel@gmail.com" };
createUser(newUser);
createUser({ name: "gabriel", isPaid: false, email: "gabriel@gmail.com" });

// We can create a type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createrOtherUser(user: User) {}

//The alias can be used as the normal types

function createrOtherMoreUser(): User {
  return { name: "", email: "", isActive: true };
}

//We can assign readonly and optional types

type UserDb = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let newUserDb: UserDb = {
  _id: "12344",
  name: "Hola",
  email: "h@hola.col",
  isActive: false,
};

//I can change the name
newUserDb.name = "Saludos";
//But not the ID
newUserDb._id = "not allowed to change";

//It is possible to merge types
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
