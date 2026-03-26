let count = 1;

function updateDispaly (){
    document.getElementById("count").innerHTML = count;
}

function increaseCount () {
    count++;
    updateDispaly();
}

function decreaseCount () {
    if(count > 0){
        count --;
    } else{
        alert("count can not be less than zero");
    }

    updateDispaly();
}

function resetCount () {
    count = 0;
    updateDispaly();
}

function saveCount () {
    localStorage.setItem("count",count);
}

function loadCount (){
    let saved = localStorage.getItem("count");
    if(saved !== null) {
        count = Number(saved);

    }
    updateDispaly();
}