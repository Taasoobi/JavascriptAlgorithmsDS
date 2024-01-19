
function myMergeSort(arr){

}

function myMerge(ar1, ar2){
    let arr = [];
    let j = 0;
    let i = 0;
    while(i != ar1.length && j != ar2.length){
        
        if(ar1[i]>ar2[j]){
            arr.push(ar2[j]);
            j++;
        } else {
            arr.push(ar1[i]);
            i++;
        }
    }
    if(i == ar1.length){
        while(j != ar2.length){
            arr.push(ar2[j]);
            j++;
        }
    }
    if(j == ar2.length){
        while(i != ar1.length){
            arr.push(ar1[i]);
            i++;
        }
    }    
    return arr;    
}

console.log(myMerge([1,10,50], [2,14,99,100]));

//----------------------

function refinedMergeSort(arr){

}



