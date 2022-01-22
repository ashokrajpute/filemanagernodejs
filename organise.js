const fs=require('fs');
const path=require('path');
let types = {
    media: ["mp4", "mkv", "mp3", "jpg","png"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};

function organisefn(dirpath)
{
 if(dirpath==undefined)   
 {
     console.log('----> No directorypath passed ro organise <----')
 }
 else{
let doesexist=fs.existsSync(dirpath);
if(doesexist==false)
{
    console.log('-->No such directory exists<--')

}
else{
let isfile=fs.lstatSync(dirpath).isFile();
if(isfile==true)
{
  console.log('--> This is a file not a directory <--')  
}
else{
    org_files(dirpath);
}

}



 }



}
//=======
function org_files(dirpath)
{let childpath=path.join(dirpath,'org_files');
let doesexist=fs.existsSync(childpath);
if(doesexist==false)
{
    fs.mkdirSync(childpath);
}
org_child(dirpath,childpath);

}
//====
function org_child(dirpath,childpath)
{let childadd=fs.readdirSync(dirpath);
 
 for(let i=0;i<childadd.length;i++)
 {let fileadd=path.join(dirpath,childadd[i]);
  let isfile=fs.lstatSync(fileadd).isFile();
  if(isfile==true)
  {
     let filetype=org_type(fileadd);
   org_trans(fileadd,childpath,filetype);
  }


 }   
    
}
//====

function org_type(obj)
{let exe=path.extname(obj);
 exe=exe.slice(1);
for(let type in types)
{let arr=types[type];
    for(let i=0;i<arr.length;i++)
    {if(exe==arr[i]){return type;}

    }


}
return 'other';

}
//====
function org_trans(src,dest,ftype)
{let child=path.join(dest,ftype);
 let doesexist=fs.existsSync(child);
 if(doesexist==false)
 {
   fs.mkdirSync(child);  
 }   
let fname=path.basename(src);
let dfile=path.join(child,fname);
fs.copyFileSync(src,dfile);
fs.unlinkSync(src);

}
module.exports={
org_files:organisefn

}



