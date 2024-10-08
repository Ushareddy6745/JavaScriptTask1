
//  task 1
// Write a program to check whether the number is positive, negative, or zero. Additionally, if the number is positive, check if it is even or odd.eg: num=6 positive,even

var num=10
if(num==0){
    console.log("Zero")
}
else if(num>0){
    console.log("Positive number")
    if(num%2==0){
        console.log("Even Number")
    }else{
        console.log("Odd Number")
    }
}
else{
    console.log("Negative Number")
}






// task 2
// write a program to add two numbers if only both are even numbers eg:n1=4 n2=6  //o/p=10 n1=5 n2=4 // not valid

let n1=4
let n2=8
if(n1 % 2==0 && n2 % 2 == 0){
 let add=n1+n2;
  console.log(" Sum of two Even Numbers"+add);
}else{
    console.log("Not Valid")
}
// 2
let n9=5
 let n10=4
 if(n9 % 2==0 && n10 % 2 == 0){
     console.log(n9+n10);
   }else{
       console.log("Not Valid")
   }






//task  3
// Write a program with a num prints the multiplication table for that number from 1 to 10 using a loop.

let number = 8;
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//3 
let numb = 7
let i = 1;
while (i <=10) {
    console.log(numb + " X " + i + " = " + (numb * i));
    i++;
}










