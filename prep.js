//https://www.youtube.com/watch?v=t3qZR6Qjy-c

/**
 * iterate through each letter, if the index % == 0. Then capitalize arr[i].
 */

function capEveryOther(s){
    console.log(s.length);
let letter ="";
let newStr=""
    for(let i = 0; i < s.length; i++){
        if(i%2==0){
            //console.log(i);
            letter = s[i].toUpperCase();
            //console.log(letter);
            //s[i]=letter;
            //console.log(s[i]);
            newStr+=letter;
        } else {
            newStr+=s[i]
        }
    }
return newStr;
}

//console.log(capEveryOther("hey whats popping homie"));

function fixHTML(s){

}