//All the promises?
const toasterPromise = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 2) {
        // throw new Error("Your toaster didn't start!");
        reject("Your toaster didn't start!");
      }
      //Success
      resolve(`POP! Your toast is ready! It took ${timer} ms to cook!`);
      //   console.log("POP! Youre toast is ready!");
      //Failure
    }, timer);
  });
};

Promise.all([
  toasterPromise(1000),
  toasterPromise(5000),
  toasterPromise(1500),
]).then((arrayOfResolves) => console.log(arrayOfResolves));

// Promise.race([toasterPromise(1000),
//     toasterPromise(2000),
//     toasterPromise(1500),]).then((data)=>{console.log(data)})
