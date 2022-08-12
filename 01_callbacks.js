//What are callbacks?


//A function that is called into another function(Higher order function)
//Reuse

const doggo = {
    breed: "Husky",
    name: "Doge",
    age: undefined,
}

// console.log(`Breed of doggo: ${doggo["breed"]}`)
// console.log(`Age of doggo: ${doggo.age}`)


//Create an function that fetches for a key in an object
//Input: object, key
//Output: is the value of said key

//Successful: return the value of the key
//Fail: return a message to the user, that says the key doesn't exist
const keyFetcher = (object, key) => {

    if(object[key] ===  undefined){
        return "Key doesn't exist?"
    }
    // if(object ===  undefined){
    //     return "Key doesn't exist?"
    // }
    return object[key]
}
console.log(keyFetcher(doggo, "age"))
// console.log(keyFetcher("color"))
