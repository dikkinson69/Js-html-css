"use strict";

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd num");
      }
      console.log("even number");
    } catch (err) {
      console.log(err.message); // Access the error message using err.message
    } finally {
      console.log("....finallyy");
      i++;
    }
  }
};

makeError();
