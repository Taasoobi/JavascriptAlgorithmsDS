/**
 * Gradually Creates a larger sorted left half
 */

function myInsertion(arr){
let start = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i] > arr[i+1]){
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
    }
}

}//couldn't figure it out

function refinedInsertion(arr){
    for(let i =1; i<arr.length; i++){
        let curr= arr[i];
        for(var j = i-1; j>=0 && arr[j] > curr; j--){
            arr[j+1] = arr[j];
            //console.log(arr);
            }
            arr[j+1] = curr;
            console.log(arr);
        }
        return arr;
    }
console.log(refinedInsertion([2,1,9,76,4]));