async function foo(){
    let res=document.getElementById("text").value;
    console.log(res);
    let result=await fetch(`"https://www.anapioficeandfire.com/api/books"${res}`);
    let final=await result.json();
    console.log(final);
    for(var i=0;i<final.length;i++){
        // console.log();
        let ele=document.createElement("div");
        ele.innerHTML=`Name:${final[i].Name} Author:${final[i].Author} ISBN:${final[i].ISBN} Number of pages:${final[i].Number of pages} ReleaseDate:${final[i].ReleaseDate}`;
        document.body.append(ele);
    }
}