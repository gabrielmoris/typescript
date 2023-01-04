// https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// This, as we know, is not possible because the data type wouldnt be always a String
function detectType(val: number | string) {
  return val.toLowerCase();
}

// The common solution would be:

function detectType2(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// A Common Examples
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
  }
  id?.toLowerCase();
}

// from docu
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }

  // All cases are covered? No, the empty string is not
}

// We can use the "in" operator narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function accountIsAdmin(account: User | Admin) {
  // We cannot use this directly
  //   return account.isAdmin;
  // For that we can use the in keyword
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// Keyword instanceof, like the "in", but for classes

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    // If i Hover here in pet, Typescript still doesnt know if it is Bird or fish!
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// We solve it with:

function isFish2(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Then
function getFood2(pet: Fish | Bird) {
  if (isFish2(pet)) {
    // If i Hover here in pet, Typescript knows if it is Bird or fish!
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// Discriminate Unions

interface Circle {
  // the kind keyword is used to know which kind it is the interface, and also helps vscode
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;
type Shape2 = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

// When to use type Never

function getArea(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      // Never is suposed to never be running
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
