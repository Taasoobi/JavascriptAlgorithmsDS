/**
 * Time Complexity
 * Big (O) quicksort
 * Best = O(nlogn)
 * Average = O(nlogn)
 * Worst = O(n^2) When the inserted array is already sorted
 */

//logic attempt
function myQuickSort(arr){
    let newArr = new Array(arr.length);
    //console.log(newArr);
    for(let i = 0; i< arr.length; i++){
        let indexVal = 0;
        for(let j = 1; j<arr.length; j++){
            if(arr[i]> arr[j]){
                indexVal++;
            }
        }
        newArr[indexVal] = arr[i];
    }
    return newArr;
}
/**
 * put the value in the index of where it should be in the array
 * if there is an element that is smaller than the selected element then increase the index value for the selected element
 */

//console.log(myQuickSort([4,3,22,15,55,36,2,5]));
// pseudo code attempt
//pivot helper
function pivHelper(arr){
    let pivot = Math.floor(arr.length/2);
}

function pseudoQS(arr){

}

//console.log(pseudoQS([4,3,22,15,55,36,2,5]));

//Refined

function pivot(arr, start = 0, end = arr.length+1){

    function swap(array, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapId = start;

    for(let i = start+1; i< arr.length; i++){
        if(pivot > arr[i]){
            swapId++;
            swap(arr, swapId, i);
        }
    }
    swap(arr, start, swapId);
    return swapId;
}

function refinedQS(arr, left = 0, right = arr.length-1){
    if(left<right){
        let pivotId = pivot(arr, left, right);
        //left
        refinedQS(arr, left, pivotId-1);
        //right
        refinedQS(arr, pivotId+1, right);
    }
    return arr;
}
console.log(refinedQS([4,6,9,1,2,5,3]));
//console.log(pivot([4,8,2,1,5,7,6,3]));