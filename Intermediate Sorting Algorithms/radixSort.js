/**
 * 
 * 
 * 
 * Does not make comparisons with numbers
 */

// returns what place a number is (543210). For example 7 is in the 3rd place
//                                 927314
function getDigit(num, place){
return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//returns how many numbers there are for example: 529 will return 3. There are 3 numbers
function digitCount(num){
    if(num === 0){return 1;}
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//takes in an array and returns the max amount of digits in that array.
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

//Radix Sort. Above are Helper functions
function refinedRadixSort(nums){
let maxDigits = mostDigits(nums);
//console.log(maxDigits);
for(let i = 0; i<maxDigits; i++){
    let digiBuckets = Array.from({length: 10}, ()=> []);
    for(let n = 0; n<nums.length; n++){
        let digit = getDigit(nums[n], i);
        digiBuckets[digit].push(nums[n]);
    }
    console.log(digiBuckets);
    nums = [].concat(...digiBuckets);
    console.log(nums);
}
return nums;
//let w = Array.from({length: 10}, ()=> ["lol"]);
//console.log(w);
}

console.log(refinedRadixSort([23,345,5467,12,2345,9852]));
//console.log(mostDigits([24,664,323,12,13513354,322,21])); //should return 8 because 13513354 has 8 numbers
//console.log(digitCount(5003)); //should return 4, because there are 4 numbers.
//console.log(getDigit(73236890, 2)); //should return 8.



/* Ignore this section
let yo = [1,2,4,5,6,2,3];
let g = 3;
let e = "asd"
let c = true;

console.log(typeof c);
*/