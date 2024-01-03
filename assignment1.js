// Assignment1 of CodeKaro
//Objective: Practice adding, removing, and updating values in objects.

console.log("Assignment 1 Completed !");
// Question1. Create an Empty Array called fruits.
let fruits = [];
console.log(fruits);

//Question2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

//Method 1 : Using normal indexing and adding- apple.
fruits[0] = "apple";
console.log(fruits); //to check if added successfully or not..and yes done successfully!

//Method 2 : Using the push() and pop() method.
fruits.push("banana");
console.log(fruits);

//Method 3: Using the slice() method.

fruits.splice(1, 0, "orange");
console.log(fruits);

// Method 4: Or all at once...
// fruits.push("apple", "banana", "orange");

//Question3. Remove the first fruit from the array.

//Method 1: Using the splice() method
fruits.splice(0, 1);
console.log(fruits);

//Question4. Add "grape" to the end of the array.
//All the three methods mentioned above can be used.
fruits.push("grape");
console.log(fruits);

//Question5. Update the second fruit in the array to "pear".

fruits[1] = "pear";
console.log(fruits);

//Question6. Print the final "fruits" array after performing the above operations.
console.log("final fruits array - [" + fruits + "]");
