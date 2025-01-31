// // 1
// let sum = (a,b) =>{
//     let result= a+b;
//     console.log(result);
// }
// console.log(sum(1,2));
// return a+b;
// }
// console.log(sum(1,2));

// //2
// let square = (a) =>{
//     return a*a;
// }
// console.log(square(2));

// //3
// let oddEven = (num) =>{
//     if(num%2 == 1){
//         console.log("odd number");
//     }else{
//         console.log("even number");
//     }
// }
// oddEven(5);

// //4
// let strlength = (str)=>{
//     return str.length;
// }
// console.log(strlength('hello'));

// //5
// let strUpperCase = (str) => {
//     console.log(str);
//     return str.toUpperCase();
// }
// console.log(strUpperCase('hello'));

// //6
// let strConcat = (str1,str2) => {
//     return str1.concat(' ', str2);
// }
// console.log(strConcat('hello', 'world'));

// //7
// let compareNum = (num1, num2) => {
//     if(num1>num2){
//         return num1 + ' is greater than' + num2;
//     }else{
//         return num2 + ' is greater than ' + num1;
//     }
// }
// console.log(compareNum(2,3));

// //8
// let checkNum = (num) => {
//     if(num>0){
//         return "Positive number";
//     }else if(num<0){
//         return "Negative number";
//     }else
//     return "zero"
// }
// console.log(checkNum(0));

// //9
// let firstElement = (arr) =>{
//     return arr[0];
// }
// let arr = [1,2,3,5];
// console.log(firstElement(arr));

// //10
// let lastChar = (str) =>{
//     return str.charAt(str.length-1);
// }
// let str = "hello";
// console.log(lastChar(str));

//11
let sum = 0;
let arrSum = (arr) =>{
    for (let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let arr = [1,2,3];
console.log(arrSum(arr));