//What is a tuple? an array with a predefined order of types of inputs
let userTup: [string, number, boolean] = ["g", 2, true];
//Doesnt fit the specific order and gives an error
// userTup = [1, "2", true];

//It has his problems
type UserTup = [number, string];

const newUserTup: UserTup = [112, "example@hotmail.re"];
//I can change the data
newUserTup[1] = "hola@adios.el";
// I shouldnt be able to push data which doesnt fit with the pattern
newUserTup.push(true);
