
function myBubbleSort(arr){
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(arr);
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[i]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }

    return arr;
}

console.log(myBubbleSort([1,18,4,7,2,25,33,3,12]));