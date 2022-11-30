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
