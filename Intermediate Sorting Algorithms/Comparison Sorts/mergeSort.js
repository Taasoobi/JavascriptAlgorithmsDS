/**
 * Big O of Merge Sort
 * Best, Worst, Average = O(n log n)
 * Space Complexity = O(n)
 */


function myMergeSort(arr){
    if(arr.length <= 1){return arr;}
    let mid = Math.floor(arr.length/2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
    

    return refinedMergeSort(refinedMerge());
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
    if(i == ar1.length || j == ar2.length){
        while(j != ar2.length){
            arr.push(ar2[j]);
            j++;
        }
        while(i != ar1.length){
            arr.push(ar1[i]);
            i++;
        }
    }
  
    return arr;    
}

//console.log(myMerge([1,5,77], [2,14,99, 100]));

//----------------------
function refinedMergeSort(arr){
    if(arr.length <= 1){return arr;}
    let mid = Math.floor(arr.length/2);
    let left = refinedMergeSort(arr.slice(0, mid));
    let right = refinedMergeSort(arr.slice(mid));
    return refinedMerge(left, right);
    //return refinedMergeSort(refinedMerge());
}

function refinedMerge(arr1, arr2){
let results = [];
let j = 0;
let i = 0;
while(i< arr1.length && j<arr2.length){
    if(arr2[j]>arr1[i]){
        results.push(arr1[i]);
        i++;
    } else {
        results.push(arr2[j]);
        j++;
    }
}
while(i<arr1.length){
    results.push(arr1[i]);
    i++;
}
while(j<arr2.length){
    results.push(arr2[j]);
    j++;
}
return results;
}

console.log(refinedMergeSort([10,24,76,73]));

