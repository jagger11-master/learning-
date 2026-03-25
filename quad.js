function findPairs(arr) {
    //0(n^2)
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            console.log(arr[i],arr[j]);
        }
    }
};

const Pairs = [1 ,2 ,3 ,4 ,5];

findPairs(Pairs);