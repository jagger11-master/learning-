// andling if we want to run the same code over and over again 
// on this case is where we works on with the array


//for(initializing; conditio; increament/decreament){

    //block of code to be executed
//}

//this block of code works only for the values of x wit an increament starting from 0 to 4 
let x = 5;

for(x=0; x <=5; x++){
   console.log(x);
}


//also with the decreament of the values of x 
// && what i have noticed is for any decremental value te values of x must attain a certan point 
for( x= 5; x>=0; x--){
    console.log(x);
}
    


// while loops statement 
//while loop loops  after a specified condition is true 
while( x <= 5 ) {
    console.log(x);
    x++;
}


//do while loop execute the code once,before checking if the condition is true,then repeat as long as the condition is true 

do{
    console.log(x);
    x--;
}
while( x >=5);

const cars = ["volvo","toyota","suzuk","range"];
let i = 0;


 for (i=0; i < len; i++){
    console.log(cars[i]);
 }

 while (cars[i]){
    console.log(cars[i]);
    i++;

 }
 // understanding how breaks works in the loop statement

for ( i = 0; i <= 5; i++){
    if( i === 3) { break; } 
    console.log(i);

}