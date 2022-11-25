//String
let greetings: string = "Hello World";
//Number
let userId: number = 9;
//Bolean
let isLoggedIn: boolean = false;

//This is nor really a good practice because Typescript
//assigns the types if you declare and asign a variable
let string = "hi";
string = 9; //Error without asign a type, because it is automatic in this case
console.log(string); //but it is compiled

//Any
let hero;
//Because of the function, typescript doesn't know the ooutput
//so It assigns auomatically :any
function getHero() {
  return "Arthur";
}
hero = getHero();

//Any turns off they type checking and should always be avoided
