console.log("typescript is good");

class User {
  // email: string;
  // name: string;

  // private vars are only accesible inside of the class
  private _accessCount = 0;
  protected _accessCount2 = 0;
  readonly city: string = "Coruña";

  // If I set publicemail: string here, I dont need to declare at the begginning
  // Otherwhise I declare email:string and in constructor email:string as well.
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  //private methods only accesible here
  private deleteAccessCount() {
    this._accessCount = 0;
  }

  //getters
  get getAppleEmail(): string {
    return `apple:${this.email}`;
  }

  get getAccess(): number {
    const access = this._accessCount;
    this._accessCount++;
    return access;
  }

  // Setters cannot return, so they need no return type
  set setCount(count: number) {
    if (count <= 1) {
      throw new Error("Access Count should be more than 1");
    }
    this._accessCount = count;
  }
}

// Inheritance (cannot access private methods and variables)

class subUser extends User {
  isFamily: boolean = true;
  changeAccessCount() {
    // This is not possible because it is private
    // this._accessCount++;
    // We can use the protected keyword
    this._accessCount2 += 45.65;
    return this._accessCount2;
  }
}
const ezequiel = new subUser("aquarelas@deco.lores", "Ezequiel");
const gabriel = new User("gabrielcmoris@gmail.com", "gabriel");

const body = document.body;
const htmlText = `Hello ${gabriel.name} your email is ${gabriel.email} and you live in ${gabriel.city}. \n You accessed ${gabriel.getAccess} times`;
const btnText = "Gabriel";
const htmlElement = document.createElement("h1");
const btn = document.createElement("button");
const btn2 = document.createElement("button");
htmlElement.innerText = htmlText;
btn.innerText = btnText;
btn2.innerText = `Ezequiel`;
body.appendChild(htmlElement);
body.appendChild(btn);
body.appendChild(btn2);
btn.addEventListener("click", () => {
  const htmlText = `Hello ${gabriel.name} your email is ${gabriel.email} and you live in ${gabriel.city}. \n You accessed ${gabriel.getAccess} times`;
  htmlElement.innerText = htmlText;
});
btn2.addEventListener("click", () => {
  const htmlText = `Hello ${ezequiel.name} your email is ${
    ezequiel.email
  }. \n You accessed ${
    ezequiel.getAccess
  } and accessed in protected ${ezequiel.changeAccessCount()} times`;
  htmlElement.innerText = htmlText;
});
