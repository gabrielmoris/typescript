interface UserInterface {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// const gabriel2: UserInterface = {
//   dbId: 23,
//   email: "h@h.com",
//   userId: 3,
//   startTrail: () => {
//     return "trail started";
//   },
//   getCoupon: (couponName: "predefined coupon", value: 12) => {
//     return value + couponName.length;
//   },
// };

////////////////////////////////////////////
// Difference between interfaces and types//
////////////////////////////////////////////

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// We can reassign Interfaces, but not Types
interface UserInterface {
  gitHubToken: string;
}

//Now my user ALSO needs this githubToken
const gabriel2: UserInterface = {
  dbId: 23,
  email: "h@h.com",
  userId: 3,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (couponName: "predefined coupon", value: 12) => {
    return value + couponName.length;
  },
  gitHubToken: "jkjkjkjskj",
};

// wen can extend Interfaces

interface Admin extends UserInterface {
  role: "admin" | "ta" | "learner";
}

const gabrielAdmin: Admin = {
  role: "admin",
  dbId: 23,
  email: "h@h.com",
  userId: 3,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (couponName: "predefined coupon", value: 12) => {
    return value + couponName.length;
  },
  gitHubToken: "jkjkjkjskj",
};
