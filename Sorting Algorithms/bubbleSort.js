/*
Bubble Sort Big O: O(n^2) = average case
best case = O(n)

*/



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

//console.log(myBubbleSort([1,18,4,7,2,25,33,3,12]));

function refinedBSort(arr){
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j<i-1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//console.log(refinedBSort([37,45,29,8]));