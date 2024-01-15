
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
console.log(mySelectionSort([1115,123,41,101,8,453])); // could not personally implement selection sort.

function refinedSelectionSort(arr){

}

