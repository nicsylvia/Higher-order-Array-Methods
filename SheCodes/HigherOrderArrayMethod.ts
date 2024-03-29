// 1. FILTER METHOD:
// Filtering arrays
// To find the scripts in the data set that are still in use, the following function
// might be helpful. It filters out the elements in an array that don’t pass a test.

// The filter() function is what you'd use if you're creating a search bar from a given list of items, for example. The filter() method also creates a new array by executing the passed callback on every element of the array, and keeps it in the resulting array IF and ONLY IF the element passes the Boolean test returned by the callback.

// The callback passed into the filter() method accepts any of the three arguments: item, index and array; same as the map() method.

// Example 1
// Given an array of costs of different products, create a new array with the costs from the input array if the cost is <= $350, and print it to the console.

// Solution:
const Array1 = [390, 190, 311.85, 67, 19048, 5000, 670];
const FilterArray = Array1.filter((c) => c <= 350);
console.log(FilterArray);

// Example 2
// Given an array of objects with the city name and population, create an array with objects from the first array if the population of that particular city is >= 5 million.

// Solution:
const Array2 = [
  { name: "Shanghai", population: 24300000 },
  { name: "Los Angeles", population: 3792621 },
  { name: "New Delhi", population: 21800000 },
  { name: "Mumbai", population: 18400000 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2100263 },
];
const FilterArray2 = Array2.filter(({ population }) => population >= 5000000);
console.log(FilterArray2);

// 2. MAP METHOD:
// Transforming with map
// The map method transforms an array by applying a function to all of its
// elements and building a new array from the returned values. The new array
// will have the same length as the input array, but its content will have been
// mapped to a new form by the function.
// This is one of the simplest functions you are going to use while working with Arrays. It forms a new array by calling the function passed into it as an argument, on each and every element of the Array. It will map each of the return values of the callback and create a new array.

// The callback passed to the map() function can accept any of the three arguments: item, index, array.

// Example 1
// Given an array of integers, create a new array in which the double of each integer in the first array is stored, and log it to the console.

// Solution:
const givenArray = [477, 8914, 40461, 599148];
const newArray = givenArray.map((n) => n * 2);
console.log(newArray);

// Example 2
// Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

// Solution:
const givenArray1 = ["pen", "book", "code"];
const newArray1 = givenArray1.map((w) => w + "s");
console.log(newArray1);

// 3. REDUCE METHOD:
// Summarizing with reduce
// Another common thing to do with arrays is to compute a single value from
// them. Our recurring example, summing a collection of numbers, is an instance
// of this. Another example is finding the script with the most characters.
// The higher-order operation that represents this pattern is called reduce (sometimes also called fold). It builds a value by repeatedly taking a single element
// from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the
// sum.
// The parameters to reduce are, apart from the array, a combining function
// and a start value. This function is a little less straightforward than filter and
// map

// 4. FOREACH METHOD:
// It loops through the array and runs the given callback for each of the elements of the array.

// The callback function passed to the forEach function can accept the currentItem, index, array.

// Example
// Given an array of numbers, log every number to the console(wat?!).

// Solution:
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((val) => console.log(val));

// The big difference between the map and forEach method is that the map method creates a new array, "mapping" the return value of the callback and create a new array, while the forEach method just iterates over the array.

// 5. SOME METHOD:

// The some method tests whether at least one element of the array complies with the given test in the callback, and returns true or false.

// The callback function passed to the some function can accept the currentItem, index, array.

// Example 1
// Given two arrays of numbers, test whether each of the arrays have at least one number that is > 5, and log the result to the console.

// Solution:
const givenArray3 = [1, 2, 3, 5, 8];
const givenArray4 = [1, 2, 3, 4, 5];
const testArray1 = givenArray3.some((n) => n > 5);
const testArray2 = givenArray4.some((n) => n < 5);
console.log(`givenArray1: ${testArray1}; givenArray2: ${testArray2}`);

// 6. EVERY:
// The every method is pretty similar to the some method, but it tests whether all the elements of the array complies with the given test in the callback, and returns true or false.

// The callback function passed to the every function can accept the currentItem, index, array.

// Example 2
// Given two arrays of numbers, test whether each of the arrays have all the numbers >= 5, and log the result to the console.

// Solution:
const givenArray5 = [10, 9, 8, 7, 6];
const givenArray6 = [5, 1, 2, 785, 45];
const testArray3 = givenArray5.every((n) => n > 5);
const testArray4 = givenArray6.every((n) => n > 5);
console.log(`givenArray3: ${testArray3}; givenArray4: ${testArray4}`);
