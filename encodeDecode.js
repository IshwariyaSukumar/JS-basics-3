let str="name";  //qdph
let x=3;
let encode=getEncode(str,x);
let decode=getDecode(encode,x);
console.log(encode);
console.log(decode);

function getEncode(str,x){
    let res="";
    for(let i=0; i<str.length; i++){
       let ascii=str.charCodeAt(i);
       let char=String.fromCharCode(ascii+x);
        res+=char;
    }
    return res;
}

    function getDecode(encode,x){
        let reverse="";
        for(let i=0; i<encode.length; i++){
            let ascii=encode.charCodeAt(i);
            let char=String.fromCharCode(ascii-x);
             reverse+=char;
         }
         return reverse;

    }
   

