
function mySelectionSort(arr){
let min;

for(let i = 0; i< arr.length; i++){
    console.log(arr);
    min = arr[i];
    for(let j = i; j< arr.length; j++){
        if(arr[j] < min){            
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;            
        }
    }
    //arr[i] = min;
}
return arr;
}
console.log(mySelectionSort([115,23,41,101,82,53])); // could not personally implement selection sort.

