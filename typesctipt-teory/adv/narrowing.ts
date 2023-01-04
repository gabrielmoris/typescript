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
