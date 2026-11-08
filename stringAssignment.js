/**
 * Assignment Details:  
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
palindrome, then test your function with various strings and print the results. 
 
Assignment Requirements:  
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
 2. Return true if same, else the false.
 */

function reverseAString(inputString){
    let reveresedStr="" //Empty string declared to store the reveresed string
    for(let i=inputString.length-1;i>=0;i--){
        reveresedStr+=inputString[i]
        //console.log(reveresedStr) Prints the reverse string one character at ata time like n,no,noi,noit,noitc
    }
   console.log(reveresedStr)//Returns the reversed string when the for loop ends ex : noitcnuF
}
reverseAString("Function")//prints noitcnuF
reverseAString("Never Settle")///prints eltteS reveN 

function isPalindrome(userInput){
    let reveresed="" //Empty string declared to store the reveresed string
    for(let i=userInput.length-1;i>=0;i--){
        reveresed+=userInput[i]
        //console.log(reveresed) Prints the reverse string one character at ata time like n,no,noi,noit,noitc
    }
   console.log(reveresed)//Returns the reversed string when the for loop ends

   if(reveresed===userInput){ //Checks for the string equal
    console.log("Entered string is palindrome",userInput)
   }
   else{
    return console.log("Not a palindrome")
   }
}
isPalindrome("malayalam")// Prints malayalam
isPalindrome("Rocky")// prints Not a palindrome
