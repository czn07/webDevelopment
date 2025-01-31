// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

// let j=0;
// while (j<=10){
//     console.log(j);
//     j++;
// }

// //1
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while( i<=10);

// //2
// let i = 1;
// let sum = 0;
// do{
//     sum = sum +i;
//     i++;
//     console.log(sum);
// }while(i<=10);

// //3
// let i=0;
// do {
//     console.log(i*5);
//     i++;
// }while(i<=10);

// //4
// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);

//5
// let i;
// i=0;
// let sum = 0;
// do{
//     if( i%2==1){
//         sum += i;
//         console.log(sum);
//     }
//     i++;
// }while(i<=10);

// //6
// let i=20;
// do{
//     console.log(i);
//     i--;
// }while(i>=1);

// //7
// let i=1;
// do{
//     console.log(i*3);
//     i++;
// }while(i<=10);

// //8
// let i=1;
// do{
//     console.log(i*i);
//     i++;
// }while(i<=10);

// //9
// let i=1;
// let sum = 0;
// do{
//     sum += i;
//     console.log(sum);
//     i++;
// }while(i<=100);

// //10
// let i = 1;
// do {
//   console.log(i ** 3);
//   i++;
// } while (i <= 10);

// //11
// let i=50;
// do{
//     console.log(i);
//     i--;
// }while(i>=1);

// //12
// let i = 19;
// do{
//     if(i%2==1){
//         console.log(i);
//     }
//     i--;
// }while(i>=1);

// //13
// let i = 10;
// let sum = 0;
// do{
//     if(i%2==1){
//         console.log(i);
//         sum += i;
//         console.log(sum);
//     }
//     i--;
// }while(i>=1);

// //14
// let i = 1;
// let count = 0;
// do{
//     if(i > 0){
//         console.log(i);
//         count++;
//     }
// //     i++;
// // }while(count<10);

// //15
// let i = 0;
// do{
//     console.log('2^'+i +'='+  2*i);
//     i++;
// }while(i<=10);

// //16
// let i = 0;
// let sum = 0;
// do{
//     if (i%2==0){
//         console.log(i);
//         sum +=i;
//         console.log(sum);
//     }
//     i++;
// }while(i<=20);

// //17
// let i=1;
// do{
//     console.log(i*4);
//     i++;
// }while(i<=10);

// //18
// let count = 0;
// let num = 2;
// do{
//     let isPrime = true;
//     for (let i=2; i< num; i++){
//         if (num % i == 0){
//             isPrime = false;
//             break;

//         }
//         if(isPrime){
//             console.log (num);
//             count++;
//         }
//     }
//     num++;

// }while(count < 5);
let count = 0;
let num = 2;    
do {
  let isPrime = true;

  // Check if num is prime by testing divisibility from 2 to num-1
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  // If num is prime, print it and increment count
  if (isPrime) {
    console.log(num);
    count++;
  }

  num++;  // Check the next number
} while (count < 5);  // Stop when we've printed 5 prime numbers
