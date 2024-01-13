
function mySelectionSort(arr){
let min = arr[0];

for(let i = 0; i< arr.length; i++){
    console.log(arr);
    min = arr[i];
    for(let j = 0; j< arr.length; j++){
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

console.log(mySelectionSort([5,3,4,1,2]));