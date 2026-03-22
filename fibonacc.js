//a fibonacc series testing how i can write an algorthim
// 1.declaring the variables that are to be used in the series 
// 2.printing the starting values 
// 3.a loop for iteration of a number 
// 4.updating the new values 
// 5.printing the next number(new number) in the sequence
let x = 0;
let y = 1;
console.log(x);
console.log(y);

 for ( let i = 2; i <=18; i++){
    let v = x + y;
    console.log(v);
    x = y;
    y = v;
 }