//Can try and catch an error? Why would we want to do that?

const doggo = {
  breed: "Husky",
  name: "Doge",
  age: 1,
};

// const keyFetcher = (object, key) => {
//     return object[key]
//     undeclared;
// }
// try{
//     keyFetcher()
// } catch(error){
//     console.log(`Error, something broke: ${error.name}`)
// }
// console.log(keyFetcher(doggo, "age"))

const toaster = (timer, success, failure) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.00001) {
        throw new Error("Your toaster didn't start!");
      }
      //Success
      success();
      //   console.log("POP! Youre toast is ready!");
    } catch (error) {
      //Failure
      failure(error);
    }
  }, timer);
};
toaster(
  2000,
  () => {
    console.log("POP! Youre toast is ready!"),
      toaster(
        3000,
        () => {
          console.log("POP! Youre toast is ready!");
        },
        () => console.log("Your toaster didn't start!")
      );
  },
  (error) => console.log(error)
);

// setTimeout(() => {
//   console.log("Hey, don't forget your keys!");
// }, 3000);
