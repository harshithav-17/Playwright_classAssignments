/**
 * Assignment Details:
Write a JavaScript program to find the total sum of all numbers present in an array.
Assignment Requirements:
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum
 */

let arr = [100,40,78,90,78,65]
let newArr = 0
for(let i=0;i<arr.length;i++){
    newArr+=arr[i]
}
console.log(newArr)// prints 451
