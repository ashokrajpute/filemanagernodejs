const fs=require('fs');
const path=require('path');

function treefn(dirpath)
{
if(dirpath==undefined)
{
 console.log("--> No directory passed <--")   
}
else{
let doesexist=fs.existsSync(dirpath);
if(doesexist==false)
{
    console.log("--> No such directory exist <--")
}
else{
tree_display(dirpath," ");
}
}
}
//===
function tree_display(dirpath,indent)
{
let isfile=fs.lstatSync(dirpath).isFile();
if(isfile==true)
{let name=path.basename(dirpath);
console.log(indent+"├──"+name);

}

else{
let name=path.basename(dirpath);
console.log(indent+"└──"+name);
let childarr=fs.readdirSync(dirpath);
for(let i=0;i<childarr.length;i++)
{let newdir=path.join(dirpath,childarr[i]);
tree_display(newdir,indent+indent)

}


}

}

module.exports={
tree:treefn
}
