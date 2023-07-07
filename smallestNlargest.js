const arr=[12,45,67,true,"tia",10];
console.log(findSmallnLargeSum(arr));

function findSmallnLargeSum(arr){
    const res=[];
for(let i=0; i<arr.length; i++){
    if(typeof arr[i]=="number"){
        res.push(arr[i]);
    }
}


res.sort(function(a,b){return a-b});
return res[0]+res[res.length-1];
}