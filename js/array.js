// const arr = [1, 2, 3, 4, 5];
// const newarr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   let num = arr[i];

//   newarr.push(num) //consoling the .push() method returns the length of the new array formed
// }

// // console.log(newarr); //prints the new array

// const arra = [2, 4, 5, 6, 7];
// const newarra = [1];
// console.log(newarra.push(100,24,678,90));
// // console.log(newarra)


// const arr =[1,2,3,4,5,6,7,8]
// let centralvalue = Math.round(arr.length/2);
// console.log(arr[centralvalue]);
// if (arr.length%2 == 0){
//     lowervalue = (arr.length)/2-1
//     highervalue = lowervalue+1;
//     let median = (arr[lowervalue]+arr[highervalue])/2;
//     console.log(median);
// }else {
//     let midval = Math.round(arr.length/2);

//     console.log(arr[midval-1]);
// }

const arow = (a,b) =>{
    return a-b;

}
console.log(arow(5,3));