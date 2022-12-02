//Basic syntax
const arrOfStr: string[] = [];
const arrOfNum: number[] = [];

arrOfStr.push("string");
arrOfNum.push(9);

// Second syntax option

const arrOfNum2: Array<number> = [];

//also with array of objects

type Users = { name: string; isActive: boolean };

const allUsers: Users[] = [];

//Array of arrays

const MLModels: number[][] = [
  [255, 255, 255],
  [233, 233],
];
