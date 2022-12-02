//It is possible to add different possibilities
let score: number | string = 33;

score = 44;
score = "55";

//Also with alias
type User2 = { name: string; id: number };
type Admin2 = { userName: string; id: number };

let gabriel: User2 | Admin2 = { name: "string", id: 98 };
gabriel = { userName: "Hello", id: 334 };

function getDbId(id: number | string) {
  console.log(`DB id is: ${id}`);
  //It is possible to maje the id inside only as string
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

getDbId(23);
getDbId("saludos");

// In array

//This would be only numbers or strings
const data: number[] | string[] = [1, 2, 3, "4"];
// If you want both
const data2: (string | number)[] = [1, "2", 3, "4"];

//It is possible to make literal assignments
let pi: 3.14 = 3.14;
//pi only can be this

let appStatus: "pending" | "success" | "error" = "pending";
