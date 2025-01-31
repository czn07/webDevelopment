// //1 Write a function that uses a `for` loop to print numbers from 1 to 10
// function count (num){
//     for (let i = 1; i<= num; i++){
//         console.log(i);
//     }
// }

// let nums = count(20);

// //2 Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers.
// function sum (num){
//     let total = 0;
//     for (let i = 1; i<=num; i++){
//         total+= i;
//         console.log(total);
//     }
//     return total;
// }
// console.log("Sum of the 'n' natural number");
// let result = sum(20);
// console.log(result);

// //3
// let sum=0;
// function evenNumber(num){
//     let n =5;
//     for(let i=0; i<=num; i++){
//         if (i%2==0){
//             sum+=i;
//             console.log(sum);
//         }
//     }
//     return n;

// }
// evenNumber(20);
// console.log(evenNumber());
// //5
// function factorial (num){
//     let result = 1;
//     if (num === 0){
//         return result;
//     }else{
//         for (let i= 1; i<=num; i++){
//             result *= i;
//         }
//     }
//     return result;

    
// }

// console.log(factorial(0));

// function fibonacci(n) {
//     let a = 0, b = 1; // First two Fibonacci numbers
  
//     // Handle edge cases
//     if (n >= 1) console.log(a); // Print the first Fibonacci number
//     if (n >= 2) console.log(b); // Print the second Fibonacci number
  
//     // Generate the Fibonacci sequence up to n terms
//     for (let i = 3; i <= n; i++) {
//       let next = a + b; // Compute the next Fibonacci number
//       console.log(next); // Print the next Fibonacci number
//       a = b; // Move to the next pair
//       b = next; // Move to the next pair
//     }
//   }
  

//   fibonacci(0); // Output: 0 1 1 2 3 5 8 13 21 34

// //12
// function fibonacci(num){
//     let a = 0; b = 1;
//     if (num<=1){
//         console.log(a);
//     }
//     for (let i = 0; i<num; i++){

//         console.log(a);
//         // console.log(b);
//         let next = a+b;
//         a=b;
//         b=next;
//     }
// }    
// fibonacci();

// let token = 'Bearer oajgoaijgl;iajgl;ifdbl;iarfjoiearf94i4poojpapjgfajf'
// let tokenarr = token.split(' ');
// console.log(tokenarr)


