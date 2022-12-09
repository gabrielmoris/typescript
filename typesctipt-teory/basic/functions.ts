//The argumentss should be always typed to avoid :any
//The function itself should be also typed
function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

//When we put several values, we specify also the types
function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  return { name, email, password, isPaid };
}

//What if we have a default value?

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return;
};

// console.log(addTwo(5));
// console.log(getUpper("hola"));
// console.log(signUpUser("juan", "ju@.n", "Ju4N", false));
// console.log(loginUser("Hola", "passwort"));

//What if the funtion returns not only 1 kind of value:

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

//In this case typeScript can detect which kind of data is each item, but not which data it returns
const heros = ["thor", "megaman", "ninja turtle"];

heros.map((hero): String => {
  return `hero is ${hero}`;
});

const rdm = [1, true, "spiderman"];
rdm.map((item): number => {
  return 43;
});

//We should specify if te function doesnt return a value with :void
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//To throw Errors we use :never (used for values which are never represented because the function throws an exception or terminates
//execution of the programm)
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
