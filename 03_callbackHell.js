//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs");
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?

// fs.readFile("./data1.txt", "utf8", (error1, data1) => {
//   if (error1) {
//     console.log(error1);
//   } else {
//     totalSum += Number(data1);//10
//     fs.readFile("./data2.txt", "utf8", (error2, data2) => {
//       if (error2) {
//         console.log(error2);
//       } else {
//         totalSum += Number(data2);//20 totalsum = 30
//         fs.readFile("./data3.txt", "utf8", (error3, data3) => {
//           if (error3) {
//             console.log(error3);
//           } else {
//             totalSum += Number(data3);//20 totalsum = 30
//             fs.readFile("./data3.txt", "utf8", (error3, data3) => {
//               if (error3) {
//                 console.log(error3);
//               } else {
//                 totalSum += Number(data3);//20 totalsum = 30
//                 fs.readFile("./data3.txt", "utf8", (error3, data3) => {
//                   if (error3) {
//                     console.log(error3);
//                   } else {
//                     totalSum += Number(data3);//20 totalsum = 30
//                     console.log(totalSum);
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });
let totalSum = 0;
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve((data));
    });
  });
};
// readFile("./data1.txt")
//   .then(() => {
//     return readFile("./data2.txt");
//   })
//   .then(() => {
//     return readFile("./data3.txt");
//   })
//   .then(() => console.log(totalSum))
//   .catch((err) => {
//     console.log(err);
//   });

Promise.allSettled([
  readFile("./data1.txt"),//Takes 1 minute
  readFile("./da.txt"),//Takes 1 hour
  readFile("./data3.txt"),//Takes 2 seconds
]).then((list) => {
  // console.log(list);
  list.forEach((item)=>{
    if(item.status !== "rejected"){
      console.log(item.value)
    }
  })
}).catch((err)=>{console.log(err)})
const toasterPromise = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 2) {
        // throw new Error("Your toaster didn't start!");
        reject("Your toaster didn't start!");
      }
      //Success
      resolve(console.log("POP! Your toast is ready!"));
      //   console.log("POP! Youre toast is ready!");
      //Failure
    }, timer);
  });
};