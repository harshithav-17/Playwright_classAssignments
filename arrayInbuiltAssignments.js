/**
 * Assignment Details:
Write JavaScript programs using different array methods instead of loops.
Assignment Requirements:
1 Use push() to add elements into an array
2 Use pop() to remove the last element
3 Use shift() to remove the first element
4 Use unshift() to add an element at the beginning
5 Use includes() to check whether an element exists
6 Use indexOf() to find the position of an element
7 Use join() to convert array into string
8 Use reverse() to reverse the array
9 Use sort() to sort the array
 */

//using push()
let a1=['Hello',100,true,'world']
console.log(a1.push('program'),a1)//returns length here im printing and the array with new item added 5 [ 'Hello', 100, true, 'world', 'program' ]

//using pop()
let a2=['Welcome',90,false,'home',70.9]
console.log(a2.pop(),a2)// returns array with popped value, here im printing the array 70.9 [ 'Welcome', 90, false, 'home' ]

//Using shift()
let a3 = a2.shift()
console.log(a3)//Welcome
console.log(a2)//[ 90, false, 'home' ]

//using unshift()
let unshiftedArray = a2.unshift('apple',100) 
console.log(unshiftedArray)//returns only the length of the array as 5
console.log(a2)//[ 'apple', 100, 90, false, 'home' ]

//Using includes method
console.log(a2.includes(300))//false

//using indexOf()
console.log(a2.indexOf('home'))//returns 4

//using join() - converts array into string
console.log(typeof a2.join())

//Using reverse()
const str='computer'
console.log(str.split('').reverse().join(''))

//Use sort() to sort the array
let ua = [899,500,787,120,999]
console.log(ua.sort())


