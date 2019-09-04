function stringtoArray(input){
    let resultArr = [];

    let arr = [];
    for(let i=0; i<input.length; i++){
        if(input[i] === ','){
            resultArr.push(arr);
            arr = [];
        }else{
            arr.push(input[i]);
        }
    }
    resultArr.push(arr);
    return resultArr;
}


let input = 'qwer,tyui,asdf,ghjk';

console.log(stringtoArray(input)); 
// test case :
//[ [ 'q', 'w', 'e', 'r' ],
// [ 't', 'y', 'u', 'i' ],
// [ 'a', 's', 'd', 'f' ],
// [ 'g', 'h', 'j', 'k' ] ]

let input2 = 'reqwe,re1qe,fdefw,gegew'
console.log(stringtoArray(input2));
//test case :
// [ [ 'r', 'e', 'q', 'w', 'e' ],
//   [ 'r', 'e', '1', 'q', 'e' ],
//   [ 'f', 'd', 'e', 'f', 'w' ],
//   [ 'g', 'e', 'g', 'e', 'w' ] ]