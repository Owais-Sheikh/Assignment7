// ================================ String Exercise ==================================

// ------------------------------------- Q # 1 ---------------------------------------
// 1. Write a ts program to find length of a string.
// var a:string = "My brother name is Hassan raza";
// console.log(a.length);

// ------------------------------------- Q # 2 ---------------------------------------
// 2. Write a ts program to copy one string to another string.

// var a:string = "Hello EveryOne!!";
// var b:string;
// b = a;
// console.log(b);

// ------------------------------------- Q # 3 ---------------------------------------
// 3. Write a ts program to concatenate two strings.

// var a:string = "My name is Owais ";
// var b:string = "raza";
// console.log(a + b);

// ------------------------------------- Q # 4 ---------------------------------------
// 4. Write a ts program to compare two strings.

// var a:string = "My name is Owais raza";
// var b = a.localeCompare("My broher name is Hassan raza");
// console.log(b);

// ------------------------------------- Q # 5 ---------------------------------------
// 5. Write a ts program to convert lowercase string to uppercase.

// var a:string = "my name is owais raza";
// var b:string = a.toUpperCase();
// console.log(b);

// ------------------------------------- Q # 6 ---------------------------------------
// 6. Write a ts program to convert uppercase string to lowercase.

// var a:string = "MY NAME IS OWAIS RAZA";
// var b:string = a.toLowerCase();
// console.log(b);

// ------------------------------------- Q # 7 ---------------------------------------
// 7. Write a ts program to toggle case of each character of a string.

// var a:string = "INteRnATioNaL";
// var e:string = "",b:string = "";
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element >= "a" && element <= "z") {
//         e = a[index].toUpperCase();
//     }
//     else if (element >= "A" && element <= "Z") {
//         e = a[index].toLowerCase();
//     }
//     b += e;
// }
// console.log(b);

// ------------------------------------- Q # 8 ---------------------------------------
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.

// var a:string = "Hell6476o wo&*%#rld !!! 4rugh573"
// var alphabet:number = 0,digit:number = 0,special:number = 0;
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element >= 'A' && element <= 'Z' || element >= 'a' && element <= 'z') {
//         alphabet++;
//     }
//     else if(element >= "0" ){
//         digit++;
//     }
//     else{
//         special++;
//     }
// }
// console.log("Total Alphabet is : ",alphabet);
// console.log("Total number of digit is : ",digit);
// console.log("Total special character is : ",special);

// ------------------------------------- Q # 9 ---------------------------------------
// 9. Write a ts program to count total number of vowels and consonants in a string.

// var a:string = "My name is Owais raza";
// var vowel:number = 0,consonant:number = 0;
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element == 'a' || element == 'A' || element == 'e' || element == 'E' || element == 'i' || element == 'I' || element == 'o' || element == 'O' || element == 'u' || element == 'U' || element == 's' || element == 'S') {
//         vowel++;
//     }
//     else if (element >= 'a' && element <= 'z' || element >= 'A' && element <= 'Z') {
//         consonant++;
//     }
// }
// console.log("Total number of vowel = ",vowel);
// console.log("Total number of consonant = ",consonant);

// ------------------------------------- Q # 10 ---------------------------------------
// 10. Write a ts program to count total number of words in a string.

// var a:string = "My name is Owais raza";
// var countWord:number = 0;
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element == " " || element == a[0]) {
//         countWord++;
//     }
// }
// console.log("Total number of word = ",countWord);

// ------------------------------------- Q # 11 ---------------------------------------
// 11. Write a ts program to find reverse of a string.

// var a:string = "My name is Owais raza";
// var b;
// for (let index = a.length; index >= 0; index--) {
//     var element = a[index];
//     b = b + a[index];   
// }
// console.log(b);

// ------------------------------------- Q # 12 ---------------------------------------
// 12. Write a ts program to check whether a string is palindrome or not.

// var a:string = "owais";
// a = a.toLowerCase()
// var flag = 0;
// var b; 
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];        
//     if (element == a[a.length - (index + 1)]) {
//         flag++;
//     }    
// }
// if (flag == a.length) {
//     console.log("Your string is palindrome string");    
// }
// else{
//     console.log("Your string is not palindrome string");
// }

// ------------------------------------- Q # 13 ---------------------------------------
// 13. Write a ts program to reverse order of words in a given string

// var a:string = "My name is Owais raza";
// var i = 1;
// for (let index = a.length; index > 0; index--) {
//     const element = a[index];
//     if (element == " ") {
//         var b = " ";
//         b = b + a[index + 2];
//         console.log(b); 
//     }

// }

// ------------------------------------- Q # 14 ---------------------------------------
// 14. Write a ts program to find first occurrence of a character in a given string.

// var a:string = "My name is Owais raza";
// var b:number = a.indexOf('s');
// console.log(b);

// ------------------------------------- Q # 15 ---------------------------------------
// 15. Write a ts program to find last occurrence of a character in a given string.

// var a:string = "My name is Owais raza";
// var b:number = a.lastIndexOf('s');
// console.log(b);

// ------------------------------------- Q # 16 ---------------------------------------
// 16. Write a ts program to search all occurrences of a character in given string.

// var a:string = "My name is Owais raza";
// var b:string = 'a'
// var occurrence;
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element == b) {
//         occurrence = index;
//         console.log("Index number : ",occurrence);
//     }
// }

// ------------------------------------- Q # 17 ---------------------------------------
// 17. Write a ts program to count occurrences of a character in given string.

// var a:string = "My name is Owais raza";
// var b:string = 's'
// var flag:number = 0;
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element == b) {
//         flag++;
//     }
// }
// console.log(`Total occurrence of a word ${b} : `,flag);

// ------------------------------------- Q # 18 ---------------------------------------
// 18. Write a ts program to find highest frequency character in a string.

// var a: string = "My name is Owais raza";
// a = a.toLowerCase();
// var flag: number = 0,highest:number = 1;
// for (let i = 0; i < a.length; i++) {
//     var b = a[i];
//     for (let index = 0; index < a.length; index++) {
//         const element = a[index];
//         if (element != " ") {
//             if (element == b) {
//                 flag++
//             }
//         }
//     }
//     if (flag > highest) {
//         highest = flag;
//         console.log(`Highest frequency character in a string is ${b}`,highest);   
//     }
//     flag = 0;
// }

// ------------------------------------- Q # 19 ---------------------------------------
// 19. Write a ts program to find lowest frequency character in a string.

// var a: string = "My name is Owais raza";
// a = a.toLowerCase();
// var flag: number = 0,highest:number = 1;
// for (let i = 0; i < a.length; i++) {
//     var b = a[i];
//     for (let index = 0; index < a.length; index++) {
//         const element = a[index];
//         if (element != " ") {
//             if (element == b) {
//                 flag++
//             }
//         }
//     }
//     if (flag <= highest && flag != 0) {
//         highest = flag;
//         console.log(`Lowest frequency character in a string is ${b}`,highest);   
//     }
//     flag = 0;
// }

// ------------------------------------- Q # 20 ---------------------------------------
// 20. Write a ts program to count frequency of each character in a string.

// var a: string = "My name is Owais raza";
// a = a.toLowerCase();
// var flag: number = 0;
// for (let i = 0; i < a.length; i++) {
//     var b = a[i];
//     for (let index = 0; index < a.length; index++) {
//         const element = a[index];
//         if (element != " ") {
//             if (element == b) {
//                 flag++
//             }
//         }
//     }
//     if (flag != 0) {
//         console.log(`Total occurrance of character ${b}`,flag);
//     }
//     flag = 0;
// }

// ------------------------------------- Q # 21 ---------------------------------------
// 21. Write a ts program to remove first occurrence of a character from string.

// var a: string = "My name is Owais raza";
// var lower = a.toLowerCase();
// var b: string = 'a';
// var c: number = lower.indexOf(b);
// var e = a.slice(0,c);
// var f = a.slice(c + 1, a.length)
// console.log("New string is : ", e + f);

// ------------------------------------- Q # 22 ---------------------------------------
// 22. Write a ts program to remove last occurrence of a character from string.

// var a: string = "My name is Owais raza";
// var lower = a.toLowerCase();
// var b: string = 'a';
// var c: number = lower.lastIndexOf(b);
// var e = a.slice(0,c);
// var f = a.slice(c + 1, a.length)
// console.log("New string is : ", e + f);

// ------------------------------------- Q # 23 ---------------------------------------
// 23. Write a ts program to remove all occurrences of a character from string.

// var a:string = "My name is Owais raza";
// var lowerCase = a.toLowerCase();
// a = lowerCase.replace(/a/g,"");
// console.log(a);

// ------------------------------------- Q # 24 ---------------------------------------
// 24. Write a ts program to remove all repeated characters from a given string.

// var a: string = "Hassanraza";
// a = a.toLowerCase();
// var count: number = 0;
// var d: number = 0;
// for (let index = 0; index < a.length; index++) {

//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];
//         if (element == a[index]) {
//             count++;
//         }
//     }
//     if (count > 1) {
//         a = a.replace(a[index],"")
//     }
//     count = 0;
// }
// console.log(a);

// ------------------------------------- Q # 25 ---------------------------------------
// 25. Write a ts program to replace first occurrence of a character with another in a string.

// var a:string = "I love Pakistan.";
// var replaceWith:string = '!';
// var replaceFrom:string = '.';
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if (element == replaceFrom) {
//         a = a.replace(replaceFrom,replaceWith);
//     }
// }
// console.log(a);

// ------------------------------------- Q # 26 ---------------------------------------
// 26. Write a ts program to replace last occurrence of a character with another in a string.

var a: string = "I love Pakistin.";
// var replaceWith:string = '!';
var replaceFrom: string = 'a';
var b = a.lastIndexOf('i')
console.log(a[b]);

a = a.replace(a[b], replaceFrom)
console.log(a);

