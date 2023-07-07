const arr=[7,9,10,12];
console.log(findMissingNumbers(arr));

function findMissingNumbers(arr){
    arr.sort(function (a,b){return a-b});
    const res=[];
    for(let i=arr[0]; i<=arr[arr.length-1]; i++){
       if(arr.includes(i)==false){
            res.push(i);
        }
    }
    return res;
}