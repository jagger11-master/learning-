 const groceries = ["mami" , "ninja" , "engineer" , "rost"];

 const searchForItems = (items) => {
    for(let i = 0; i<groceries.length; i++){
        if(groceries[i] === items){
            console.log(items);
        }
    }

    for(let j = 0; j<groceries.length; j++){
        if(groceries[j] === items) {
            console.log(items2);
        }
    }

 };

 searchForItems("ninja");