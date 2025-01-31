// // }while(count < 5);
// let count = 0;
// let num = 2;
// do {
//   let isPrime = true;

//   // Check if num is prime by testing divisibility from 2 to num-1
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   // If num is prime, print it and increment count
//   if (isPrime) {
//     console.log(num);
//     count++;
//   }

//   num++;  // Check the next number
// } while (count < 5);

//String Methods

// let str = 'String';
// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }
// str[1]='p';
// console.log(str)
// let str = 'String';
// str = str.slice(0, 1) + 'p' + str.slice(2);
// console.log(str);  // "Stping"

// //1
// let str = "Hello EveryOne";
// let count = 0;
// for (let i = 0; i<str.length; i++){
//     if (str[i] == 'e'){
//         count++;
//         console.log(count);
//     }
// }

// //2
//  let str = "Hello world ";
//  if (str.startsWith('H') && str.endsWith('e')){
//     console.log('The string starts with H and ends with e');
//  }else{
//     console.log('No')
//  }

// //3
// const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// let str = "Hello World";
// for (let i = 0; i < str.length; i++){
//     for(let j = 0; j< arr.length; j++){
//         if (str[i] == arr[j] ){
//             console.log(str[i]);

//             break;
//         }

//     }
// }

// //4
// let str = "Hello Everyone";
// console.log(str);

// //5
// let str = 'Hello EveryOne';
// let vowels = "aeiou";
// let count = 0;
// for (let i=0; i<str.length; i++){
//     for(let j=0; j<str.length; j++){
//         if(str.toLowerCase()[i] == vowels[j]){
//             count++;
//             console.log(count);
//         }
//     }
// }

// //6
// let str = "Hello Everyone W";
// let splitted = str.split(' ');
// console.log(splitted)
// let result='';
// for(let i = 0; i< splitted.length; i++){
//     result = result + splitted[i][0];
//     console.log(result);
// }

// //7
// let str = "racecar"
// let lowcaps = str.toLowerCase();
// for (let i=0; i<lowcaps.length; i++){
//     if (lowcaps[i] == lowcaps[(lowcaps.length-1)-i]){
//         console.log('The string is palindrome');

//         }else{
//             console.log('Not a palindrome');
//             }

//     }

// //8
// let str = "   Hello World   ";
// let trimmedstr = str.trim();
// if( trimmedstr == ' '){
//     console.log('empty');
// }else{
//     console.log(trimmedstr);
// }

// //9
// let str = 'Hello Borld';

// for ( let i = 0; i<str.length; i++){
//     if (str[i] == str[i].toUpperCase()){
//         console.log(str[i].toLowerCase());

//     }else if (str[i] == str[i].toLowerCase()){
//         console.log(str[i].toUpperCase());

//     }else{
//         console.log(str[i]);
//     }

// }

// //10
// let str = "heljlo world ";
// let sliced = str.slice(0, 5);
// console.log(sliced);
// if (sliced.toLowerCase() == 'hello'){
//     console.log("contains hello")
// }else {
//     console.log('doesn \'t contain');
// }

// //11
// let str = "helloworld";
// let vowels = 'aeiou';
// let str1 = '';
// for (let i = 0; i<str.length; i++){
//     let char = str[i];
//     for (let j = 0; j<vowels.length; j++){
//         if (char.toLowerCase() == vowels[j]){
//             str1 += "4";

//            // console.log(str1);

//         }else{
//             str1 += char;

//         }

//     }
// }
// console.log(str1)
// let str = "hello world";
// let vowels = 'aeiou';
// let str1 = '';

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (vowels.includes(char.toLowerCase())) {
//         str1 += '4';
//     } else {
//         str1 += char;
//     }
//     console.log(str1);
// }

// //12
// let str = 'Hello world hello';
// let strarr = str.split(' ');
// let newstr = '';
// console.log(strarr);
// for(let i = 0; i < strarr.length; i++){
//     let char = strarr[i];
//     if( strarr[i].toLowerCase() == 'hello'){
//         newstr += 'hi';

//     }else{
//         newstr += char;
//     }
//     if (i<strarr.length-1){
//         newstr += ' '
//     }
//     console.log(newstr);
// }

// //13
// let str = 'hello everyone '
// let count = 0;
// for (let i = 0; i<=str.length; i++){
//     if( str[i]==' '){
//         console.log('space found');
//         count++;
//         console.log(count);
//     }
// }

// //14
// let str = 'stringlenght';
// if(str.length > 10){
//     console.log("String length greater than 10");
//     console.log(str.toUpperCase());
// }else{
//     console.log(str.toLowerCase());
//     }

// //15
// let str = "Hello EveryOne"
// for (let i = 0; i<str.length; i++){
//     if(str[i].toLowerCase() == 'o')
//         console.log(str.indexOf(str[i]));
// }

// //16
// let str ="  hello  world    "
// let trimmedstr = str.trim();
// console.log(trimmedstr);
// if (trimmedstr.length % 2 == 0){
//     console.log('Even length');
// }else{
//     console.log('Odd length');
// }

// //17
// let str = 'a'
// if(str.length > 0){
//     if(str[0]===str[str.length-1]){
//         console.log('same characters');
//     }else{
//         console.log('different characters')
//     }

// }else{
//     console.log("empty string")
// }

//18
// let str = 'hello world';
// let strarr = str.split(' ');
// let str1 ='';
// let char = true;
// for ( let i =0; i<strarr.length;i++){
//     let str2 = strarr[i];
//     if(char){
//         str2.slice(0,3).replace('ABC')
//         console.log(str2.slice(0,3).replace(str2.slice(0,3),'ABC'));
//     }
// }

// let str = 'hello world';
// let strarr = str.split(' '); // Split string into words

// for (let i = 0; i < strarr.length; i++) {
//     let str2 = strarr[i];

//     // If the string has more than 3 characters, replace the first 3 characters
//     if (str2.length >= 3) {
//         // Slice the first 3 characters and replace them with "ABC"
//         let modifiedStr = 'ABC' + str2.slice(3);
//         console.log(modifiedStr); // Print the modified string
//     } else {
//         // If the word is less than 3 characters, just replace it with "ABC"
//         console.log('ABC');
//     }
// }

// let str = 'erep ';
// let strarr = str.split(' ');
// if(strarr.length>0){
//     strarr[0]  = 'ABC'+strarr[0].slice(3);
// }else{
//     console.log('empty string');
// }
// let replacedstr = strarr[0];
// for(let i = 1; i<strarr.length;i++){
//     replacedstr += " " +strarr[i];
//     console.log(replacedstr);
// }

// //19
// let str = 'hello';
// let rev = '';
// for (let i = 0; i<str.length; i++){
//     rev += str[str.length-1-i];
//     console.log(rev);
// }

// //20
// let str = "hello EveryOne Stand One"
// let strarr = str.split(' ');
// let count = 0;
// for (let i = 0; i<strarr.length; i++){
//     if(strarr[i].includes('One')){
//         count++;
//         console.log(count);

//     }
//     else{
//         console.log(count);
//         }

// }

let str = "hi i am sijan";
let strarr = str.split(" ");
let newstr = "";
console.log(strarr);
for (let i = 0; i < strarr.length; i++) {
  newstr = newstr +  strarr[i][0].toUpperCase() + strarr[i].slice(1) + " ";
  console.log(newstr);
}
