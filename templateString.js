const string = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[State] #[phone].";
console.log(replaceTemplateString(string, [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]]));


function replaceTemplateString(string,replaceArray){
    let str="";
    for(let i=0; i<string.length; i++){
        if(string.charAt(i)!="#" && string.charAt(i)!="[" && string.charAt(i)!="]"){
           str+=string.charAt(i);
        }
    }
    //let res=str.toLowerCase();
    let res=str.replace(replaceArray[0][0],replaceArray[0][1]);
    let res1=res.replace(replaceArray[1][0],replaceArray[1][1]);
    let res2=res1.replace(replaceArray[2][0],replaceArray[2][1]);
   
    return res2;
}