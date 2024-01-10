
//Only works with sorted data.

function binarySearch(arr, val){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) /2); //Math.floor rounds down to the nearest integer 5.95 -> 5;

    while(arr[middle] !== val && start <= end){ //If start becomes greated than the end, it will run forever otherwise. if start is greater, then the value is not inside of the array/
        if(val < arr[middle]){
            end = middle - 1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end) /2);
        }
    if(arr[middle] == val){
        return middle;
    }
    return -1; //return -1 if element is not inside array
}

console.log(binarySearch([1,2,3,4,5,6,7], 4));
/*
Big O is: Worst and Average Case is O(log n)
Best Case is O(1)

*/