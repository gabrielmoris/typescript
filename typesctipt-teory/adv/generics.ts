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
