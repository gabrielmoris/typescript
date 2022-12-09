console.log("typescript is good");

class User {
  email: string;
  name: string;
  readonly city: string = "Coruña";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const gabriel = new User("gabrielcmoris@gmail.com", "gabriel");

const body = document.body;
const htmlText = `Hello ${gabriel.name} your email is ${gabriel.email}`;
const htmlElement = document.createElement("h1");
htmlElement.innerText = htmlText;
body.appendChild(htmlElement);
