/**
BigO of Selection Sort
O(n^2)
 */


function mySelectionSort(arr){
let min;

for(let i = 0; i< arr.length; i++){
    console.log(arr);
    min = arr[i];
    for(let j = i; j< arr.length; j++){
        if(arr[j] < min){
            min = arr[j];            
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;            
        }
    }
    //arr[i] = min;
}
return arr;
}
//console.log(mySelectionSort([1115,123,41,101,8,453])); // could not personally implement selection sort.

function refinedSelectionSort(arr){
    for(let i = 0; i<arr.length;i++){
        let lowest = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
        //console.log(arr);
        //console.log("Swapping");
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        //console.log(arr);
        //console.log("_____________________");
        }
    }
    return arr;
}

console.log(refinedSelectionSort([34,22,10,19,17]));