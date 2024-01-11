

function naiveSearch(long, sub){

    let count = 0;

    for(let i = 0; i <long.length; i++){
        for(let j = 0; j < sub.length; j++){
            console.log(sub[j], long[i+j]);
            if(sub[j] !== long[i+j]){
                break;
            }
            if(j === sub.length-1){//j reached the end of the sub array. j is the size of the sub array
                console.log("Match Found");
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "cop"));