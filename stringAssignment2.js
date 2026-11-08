/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word. 
 */

// Ex string "Hello World"
/*const s = "Hello World";

// split by spaces
const words = s.split(" ");
console.log(words)//prints [ 'Hello', 'World' ]
const lastWord = words[words.length-1]//last word

console.log(`Last word is ${lastWord} and the length is ${lastWord.length}`);*/

/**
 * Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length
 */
//Ex str = "fly me   to   the moon"
const str = "fly me   to   the moon";

// split by spaces
const arrWords = str.trim().split(" ");
console.log(arrWords)//prints [ 'Hello', 'World' ]
const lastWordInArr = arrWords[arrWords.length-1]//last word

console.log(`Last word is ${lastWordInArr} and the length is ${lastWordInArr.length}`);

/**
 * Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result
 */

//Ex  Input: isAnagram('listen', 'silent')
function isAnagram(str1,str2){
    if(str1.length!==str2.length){
        console.log("The length wont match, strings are not anagram")//checks for the length
    }
    const w1=str1.toLowerCase().split('').sort().join('');//converting to lowercase and sorting
    const w2=str2.toLowerCase().split('').sort().join('');//converting to lowercase and sorting
    if(w1===w2){
        console.log(`Words are Anagram `+w1,w2)
    }
    else{
        console.log("Words are not Anagram "+w1,w2)
    }
}
isAnagram("listen","silent")
isAnagram('hello', 'world')  