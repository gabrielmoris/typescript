//https://www.typescriptlang.org/docs/handbook/2/generics.html

// Way to make reusable components

const score: Array<number> = []; // example of how to type array instead of number[]
const names: Array<string> = [];

// This functions can return a different data type than the argument
function identityOme(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// This will use always the same type
function identityTre<Type>(val: Type): Type {
  return val;
}
//Simplified version, i can use the same letter or world
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "cocaloca", type: 3 });

//Generics and Arrays
// If I use .length it will give an error because the type may not be an array

function getSearchProducts<T>(products: T[]): T {
  //Some operations
  const myIndex = 0;
  return products[myIndex];
}

//With arrow functionsç
// The comama is conventional, not neccesary but used for some devs to indicate that it is a generic type
const getMoreSearchProducts = <T>(products: T[]): T => {
  //Some operations
  const myIndex = 0;
  return products[myIndex];
};

// Generics constraints: uing type params

// In this case, the values can be different data types, but I would like them to be equal

function anotherFunc<T, U>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

anotherFunc(3, "4"); // This should complain!

// I solve adding this
function anotherFunc2<T, U extends T>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}
anotherFunc2("3", "4"); // Now they have to be equal!

// Another example, because We can extend a different data type for each generic
interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunc3<T extends string, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return { valOne, valTwo };
}

anotherFunc3("valOne", {
  connection: "1",
  userName: "Franz",
  password: "1234",
});

//

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
