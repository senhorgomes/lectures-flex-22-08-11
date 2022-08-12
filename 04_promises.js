//Whats a promise?

//Commitement?
// Two people, there are two conditions, one if it breaks, and the other if its successful!
//Pretty much the same
//Create a new promise object
//Pending
//Resolved
//Rejected

// const toaster = (timer, success, failure) => {
//     setTimeout(() => {
//       try {
//         if (Math.random() > 2) {
//           throw new Error("Your toaster didn't start!");
//         }
//         //Success
//         success();
//         //   console.log("POP! Youre toast is ready!");
//       } catch (error) {
//         //Failure
//         failure();
//       }
//     }, timer);
//   };
const toasterPromise = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 2) {
        // throw new Error("Your toaster didn't start!");
        reject("Your toaster didn't start!");
      }
      //Success
      resolve("POP! Your toast is ready!");
      //   console.log("POP! Youre toast is ready!");
      //Failure
    }, timer);
  });
};
//Simpler version
// toaster(2000, ()=> {console.log("POP! Youre toast is ready!")}, ()=> {console.log("Your toaster didn't start!")})
// toasterPromise(2000).then((data)=> {console.log(data)}, (error)=> {console.log(error)})
toasterPromise(2000)
  .then((data) => {
    console.log(data), toasterPromise(2000);
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  });
//Complicated version
// toaster(
//   2000,
//   () => {
//     console.log("POP! Youre toast is ready!"),
//       toaster(
//         3000,
//         () => {
//           console.log("POP! Youre toast is ready!");
//         },
//         () => console.log("Your toaster didn't start!")
//       );
//   },
//   (error) => console.log(error)
// );
