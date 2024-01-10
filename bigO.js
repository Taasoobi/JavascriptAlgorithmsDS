console.log("Hello World");
console.log("Try This");

function addUp(n){
    let tot = 0;
    for (let i = 1; i<=n; i++){
        tot += i;
    }
    return tot;
}

console.log(addUp(4));