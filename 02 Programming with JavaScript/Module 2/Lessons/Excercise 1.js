function listArrayItems(a, p){
    for(let i=0; i<arr.length; i++){
        console.log(a[i],p[i]);
    }
}
arr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
prc = [ 5, 6, 8, 10, 4, 5, 2 ]
listArrayItems(arr, prc);

console.log("==============");

function letterFinder(word ,match){
    for(let i=0 ; i<word.length; i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('---No match found at', i)
        }
    }
}

letterFinder('Hello', 'l');