// //Ex1.1
// for(let num = 0;num<=10;num++) {
//     console.log(num);
// }


// //Ex1.2
// for(let num1 = 1;num1 <= 10;num1++) {
// if(num1%2 == 0) {
// console.log(num1);
// }
// }

// //Ex1.3
// function evenNumUntil2(num) {
// for( i =2; i<=num ;i +=2 ) {
//     console.log(i);
//    }
// }
// evenNumUntil2(20);

// //Ex1.4
// function printUntil20() {
//     for(i=1;i<=20;i++) {
//         if(i===13) {
//             continue;
//         }
//          console.log(i);
//     }
// }
// printUntil20()


// //Ex1.5
// function print10Reverse() {
//     for(i=10;i>0;i--) {
//         console.log(i);
//     }
// }

// print10Reverse();


// //Ex1.6

// function printUntil7() {
//     for(i=1;i<=10;i+=2) {
//         console.log(i);
//         if(i===7) {
//             break;
//         }
        
//     }
// }
// printUntil7()

//Ex1.7

// const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
// function PrintArray (){
//     for (let i =0;i<array.length;i++){
//           console.log(array[i]);
//     }
// }
// PrintArray(array);

// //Ex1.8

// const array1 = [1,2,3,4,5]
//  function printEvenNumbers(array1){
// for(i = 1;i<array1.length;i+=2) {
//     console.log(array1[i]);
// }
// }

// printEvenNumbers(array1);

// //Ex1.9

// function returnSum (array2) {
//     let sum=0;
//     for (i=0;i<=array2.length;i++) {
//         sum+=i;
//         console.log(sum);
//     }
// }

// returnSum([1,2,3]);

// //Ex1.10
// function countTheWord (word) {
//     let count = 0;
//     for(i=0;i<=word.length;i++) {
//      count ++; 
//     }
//     console.log(count);
// }
// countTheWord('dfgjsdfgkjndsfg');

//Ex1.11
// function sortMyArray (mainArray=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104]) {
//     let evensArray = []
//     let oddsArray = []
//     for(let i =0;i<mainArray.length;i++) {
//         if(mainArray[i]%2 ==0) {
//             evensArray.push(mainArray[i]);
//         }
//         else {
//             oddsArray.push(mainArray[i]);
//         }
       
//     }
//     console.log(evensArray);
//     console.log(oddsArray);
//     console.log(mainArray);
// }
// sortMyArray()


// //Ex1.12
// function checkTheY (string) {
//     for(let i=0;i<=string.length;i++) {
//         if(string[i]=='y') {
//          console.log('yes!');
//          return true;
//         }
//         // else {
//         //     console.log('no!!');
//         }
//     }


// checkTheY('ysdmvsdv')


// //Ex1.13
// function findTheBiggestNum(array4) {
//      array4 = [1,40,100,3,5,77];
//     let biggest= 0;
//     for(i=0;i<=array4.length;i++) {
// if(array4[i]>biggest) {
//     biggest = array4[i];
// }
//     }
//     console.log(biggest);
// }
// findTheBiggestNum();

// //Ex2

// let startfuel;
// let astronautsNum;
// let altitudeLevel;

// //2.1
// let z = 1;
// while(z<=10) {
//  console.log(z);
//  z++;   
// }

// //2.2
// let x = 2;
// while(x<=10) {
//     console.log(x);
//     x+=2;
// }

// //2.3
// let y = 1;
// while(y<=10) {
//     if(y%2 == 1) {
//         console.log(y);
//     }
//     y++;
// }

 //2.4
// let t = 10;
// while (t>0) {
// console.log(t);
// t--;
// }

//2.5
// function countFrom1ToNum() {
//  let num = prompt('Please choose your Num');
//  let i=1;
//  while(i<=num) {
//     console.log(i);
// i++;
//  }
// }
// countFrom1ToNum()

//2.6
// function sumFrom1ToNum() {
//     let num = prompt('Pick a Num Please');
//     let i = 1; 
//     let sum= 0;
//     while(i<=num) {
//     sum+=i;
//     i++;
//     }
//     console.log(sum);
// }
// sumFrom1ToNum()

//2.7
// function PrintTheNumFactorial() {
//     let num = prompt('Pick a num Please!');
//     let i = 1;
//     let fac = 1
//     while (i<=num) {
//      fac *=i;
//      i++;
//         }
//         console.log(fac);

// }

// PrintTheNumFactorial()

//2.8
// function ChosseFuelLevel() {
//     let num = prompt('Choose The Fuel Level Please:');
//     while (num < 5000 || num > 30000) {
//         console.log('dfgdfgd');
//         num = prompt('Choose The Fuel Level agian Please:');
//     }
//     console.log('your fuel level is'+' '+num );
// }
// ChosseFuelLevel();

// //3.1
// function makeThePiramida() {
//     let sign = '';
//     for (let i = 0; i<6;i++) {
//         sign +='*'+' ';      
//         console.log(sign);
//     }
// }
// makeThePiramida();


// function makeThePiramida() {
//     let sign = '';
//     for(let i = 0; i<=6;i++) {
//         sign = ''
//         for(j = 0;j<i;j++) {
//             sign +='* '
//         }console.log(sign);
//     }
// }
// makeThePiramida()

//3.2
// function multiplay() {
//     let resualt= ' '
//     let num1 = [1,2,3,4,5,6,7,8,9,10];
//     let num2 = [1,2,3,4,5,6,7,8,9,10];
//     for(let i =[1];i<=num1.length;i++) {
//         let resualt= ''
//         for (let j = [1];j<=num2.length;j++) {
//     resualt+=`${[i]*[j]} `
//         }
//         console.log(resualt)
//     }
// }
// multiplay();

