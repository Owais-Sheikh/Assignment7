// ------------------------------------- Q # 1 ---------------------------------------
// 1. Write a ts program to print day of week name using switch case.
// var day: number = 5;
//     switch (day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Wrong input");
//             break;
//     }
// ------------------------------------- Q # 2 ---------------------------------------
// 2. Write a ts program print total number of days in a month using switch case.
// var month: string = "March";
// switch (month) {
//     case "January"||"Jan":
//         console.log("January has 31 days");
//         break;
//     case "Feb"||"Febuary"||"feb":
//         console.log("Febuary has 28 or 29 days");
//         break;
//     case "March":
//         console.log("March has 31 days");
//         break;
//     case "April":
//         console.log("April has 30 days");
//         break;
//     case "May":
//         console.log("May has 31 days");
//         break;
//     case "June":
//         console.log("June has 30 days");
//         break;
//     case "July":
//         console.log("July has 31 days");
//         break;
//     case "August"||"Aug":
//         console.log("August has 31 days");
//         break;
//     case "September"||"Sep":
//         console.log("September has 30 days");
//         break;
//     case "October"||"Oct":
//         console.log("October has 31 days");
//         break;
//     case "November"||"Nov":
//         console.log("November has 30 days");
//         break;
//     case "December"||"Dec":
//         console.log("December has 31 days");
//         break;
//     default:
//         console.log("Wrong input");
//         break;
// }
// ------------------------------------- Q # 3 ---------------------------------------
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var character:string = "P";
// switch (character>="a"&&character<="z" || character>="A"&&character<="Z") {
//     case true:
//         console.log("Your character is an alphabet");
//         break;
//     default:
//         console.log("Your character is not an alphabet");
//         break;
// }
// ------------------------------------- Q # 4 ---------------------------------------
// 4. Write a ts program to find maximum between two numbers using switch case.
// var num1:number = 74;
// var num2:number = 40;
// switch (num1 > num2) {
//     case true:
//         console.log(`${num1} is greater than ${num2}`);
//         break;
//     default:
//         console.log(`${num2} is greater than ${num1}`);
//         break;
// }
// ------------------------------------- Q # 5 ---------------------------------------
// 5. Write a ts program to check whether a number is even or odd using switch case.
// var num:number = 41;
// switch (num % 2 == 0) {
//     case true:
//         console.log(`${num} is an even number`);
//         break;
//     default:
//         console.log(`${num} is an odd number`);
//         break;
// }
// ------------------------------------- Q # 6 ---------------------------------------
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// var num: number = 78;
// switch (num > 0) {
//     case true:
//         console.log(`${num} is a positive number`);
//         break;
//     case false:
//         switch (num < 0) {
//             case true:
//                 console.log(`${num} is a negative number`);
//                 break;
//             default:
//                 console.log(`${num} is a zero number`);
//                 break;
//         }
// }
// ------------------------------------- Q # 8 ---------------------------------------
// 8. Write a ts program to create Simple Calculator using switch case.
// var num1: number = 34;
// var num2: number = 67;
// var operator: string = "+";
// switch (operator) {
//     case "+":
//         console.log(`${num1} + ${num2} = `, num1 + num2);
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = `, num1 - num2);
//         break;
//     case "/":
//         console.log(`${num1} / ${num2} = `, num1 / num2);
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = `, num1 * num2);
//         break;
//     default:
//         console.log("Wrong input");
//         break;
// }
