// Day-3
// Control flow
// if / else / else if
// Switch Case
// Early return pattern

// Alot of problems solved with all this

// Day-4
// Practice qn and then we moving to loops and all that 

// Question 1
// function checkNumber(num) {
// if(num<=0) return "Invalid number"
// let result="";
// if(num%2===0){
//     result += "Even "
// }else{
//     result += "Odd "
// }
// if(num>100){
//     result += "Huge "
// }else if(num>50){
//     result += "Large "
// }else{
//     result += "Small "
// }
// if(num%3===0){
//     result += "Divisible my 3, ";
// }else{
//     result += "Not divisible by 3 ";
// }
// if(num%5===0){
//     result += "Divisible by 5";
// }else{
//     result += "Not divisible by 5,";
// }
// return result;
// }
// console.log(checkNumber(3));


// Question 2
// — Status Builder
// function getStatus(score) {
// }
// Requirements:
// if score < 0 → "Invalid"
// if score >= 90 → add "Excellent "
// if score >= 70 → add "Good "
// else → add "Needs Improvement "
// if score is even → add "EvenScore "
// if divisible by 5 → add "Bonus "

// 👉 return result

// Answer

// function getStatus(score){
//     if(score<0) return "Invalid"
//      let result=""
//      if(score>=90){
//         result += "Excellent "
//      }else if(score>=70){
//         result += "Good "
//      }else{
//         result += "Need improvement "
//      }
//      if(score%2===0){
//         result += "EvenScore "
//      }else{
//         result += "OddScore "
//      }
//      if(score%5===0){
//         result += "Bonus"
//      }
//      return result;
// }
// console.log(getStatus(3));


// Question 3
// function loginSystem(username,password){
//     if(username==="Admin" && password==="MMaa12##") return "Login Successfully Completed!"
//     if(username==="" && password==="") return "Enter username and password"
//     if(username==="" && password==="MMaa12##") return "Enter username"
//     if(username==="Admin" && password==="") return "Enter password"
//     if(username!=="Admin" && password!=="MMaa12##") return "Invalid username and password"
//     if(username!=="Admin" && password==="MMaa12##") return "Invalid username"
//     if(username==="Admin" && password!=="MMaa12##") return "Invalid password"
// }
// console.log(loginSystem("Admin","MMaa12##"));

// Question 4

// function ultimateCheck(num){
//     if (num<=0) return "Invalid input"

//     let result="";

//     if(num%2===0){
//         result +="Even "
//     }else{
//         result +="Odd "
//     }

//     if(num>100){
//         result +="Huge "
//     }else if(num>50){
//         result +="Large "
//     }else{
//         result +="Small "
//     }

//     if(num%3===0){
//         result +="Div3 "
//     }else if(num%5===0){
//         result +="Div 5"
//     }else{
//         result +="Not Div by 3 and 5"
//     }

// return result

// }
// console.log(ultimateCheck(210));

// Assignment in js

// var a="Mehrouf";
// let b="Ananya";
// const c="Raine";
// console.log(a,b,c);

// {
//     let a="Manu";
//     console.log(a);
// }

// let name="Mehrouf";
// let city="Thrissur";
// let age=24;
// console.log(name,city,age);

// let a=prompt("Whats you name?");
// (alert("welcome "+a  ));

// let user="Manu";
// console.log(typeof(user));

// let a=prompt("enter anything");
// console.log(typeof(a )+("welcome "+a));

// let age=prompt("Enter age");
// console.log(age+5);

// let msg="i love sheriyans";
// console.log(msg.split(""));

// let name="Manu";
// console.log(`Hey ${name}, welcome to js!`);
// console.log(name.includes(""));

// let name=prompt("Enter your name");
// let Company=prompt("Enter your Company");
// console.log(`Hello Welcome ${name} Ceo of ${Company}`)

// // Date types
// let age=255;
// let name="Harsh";
// let isStudent=false;
// let skills=["js","html"];
// let user={city:"Thrissur"};
// let x=null;
// let y;
// let z=Symbol("id");
// console.log(typeof(age));
// console.log(typeof(name));
// console.log(typeof(isStudent));
// console.log(typeof(skills));
// console.log(typeof(user));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));


// for(let i=1;i<31;i++){
//    if(i%3===0){
//     console.log("Fizz")
//    }
//    if(i%5===0){
//     console.log("Buzz")
//    }
//    if(i%3===0 && i%5===0){
//     console.log("FizzBuzz")
//    }
// }

// Mastering Loops

// for(let i=1;i<16;i++){
//     console.log(i);
// }

// let i=1;
// while(i<11){
// console.log(i);
//     i++;
// }

// let i=2;
// while(i<21){
// console.log(i);
// i++;
// }

// let i=10;
// while(i>0){
// console.log(i);
// i--;
// }

// let i=1;
// do{
//     console.log(i);
// i++
// }
// while(i<11);

// let i=10;
// while(i>0){
// console.log(i);
// i--;
// }

// for(let i=1;i<21;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let i=1;
// while(i<16){
//     if(i%2!==0){
//         console.log(i + " is Odd");
//     }
//     i++;
// }

// for(let i=1;i<10;i++){
//     console.log(5+"x"+i+"="+5*i);
// }

// for(let i=1;i<51;i++){
//    if(i%3===0){
//     console.log(i);
//    } 
// }

// for(let i=1;i<51;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }