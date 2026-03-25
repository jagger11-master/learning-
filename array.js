
function edit(value,index,array) {
    return value * 2;
}

try{
    const name =[ 3 , 4 ,5 ,6 ,7 , 8];
const name2 = name.map(edit);
console.log(name2);

}
catch(err){

}
