const fs=require('fs');
const path=require('path');
const tr=require('./tree');
const hlp=require('./help');
const org=require('./organise');

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

let arr=process.argv.slice(2);
let com=arr[0];
switch(com)
{
case 'help':hlp.help();
break;
case 'organise':org.org_files(arr[1]);
break;
case 'tree':tr.tree(arr[1]);
break;
default: defaultfn();
break;
}

// function helpfn()
// {
// console.log(
// ` ⚪ For your service(different cmds)-->
//     1) help--> node <foldername> help 
//     2) organise--> node <foldername> organise <<directorypath which is to organise>>
//     3) tree--> node <foldername> tree <<directorypath which is to be represented in tree form>>

//         THANK YOU!`
// )
// }

//********************************* 
//***********ORGANISE**************
//********************************* 

// function organisefn(dirpath)
// {
//  if(dirpath==undefined)   
//  {
//      console.log('----> No directorypath passed ro organise <----')
//  }
//  else{
// let doesexist=fs.existsSync(dirpath);
// if(doesexist==false)
// {
//     console.log('-->No such directory exists<--')

// }
// else{
// let isfile=fs.lstatSync(dirpath).isFile();
// if(isfile==true)
// {
//   console.log('--> This is a file not a directory <--')  
// }
// else{
//     org_files(dirpath);
// }

// }



//  }



// }
// //=======
// function org_files(dirpath)
// {let childpath=path.join(dirpath,'org_files');
// let doesexist=fs.existsSync(childpath);
// if(doesexist==false)
// {
//     fs.mkdirSync(childpath);
// }
// org_child(dirpath,childpath);

// }
// //====
// function org_child(dirpath,childpath)
// {let childadd=fs.readdirSync(dirpath);
 
//  for(let i=0;i<childadd.length;i++)
//  {let fileadd=path.join(dirpath,childadd[i]);
//   let isfile=fs.lstatSync(fileadd).isFile();
//   if(isfile==true)
//   {
//      let filetype=org_type(fileadd);
//    org_trans(fileadd,childpath,filetype);
//   }


//  }   
    
// }
// //====

// function org_type(obj)
// {let exe=path.extname(obj);
//  exe=exe.slice(1);
// for(let type in types)
// {let arr=types[type];
//     for(let i=0;i<arr.length;i++)
//     {if(exe==arr[i]){return type;}

//     }


// }
// return 'other';

// }
// //====
// function org_trans(src,dest,ftype)
// {let child=path.join(dest,ftype);
//  let doesexist=fs.existsSync(child);
//  if(doesexist==false)
//  {
//    fs.mkdirSync(child);  
//  }   
// let fname=path.basename(src);
// let dfile=path.join(child,fname);
// fs.copyFileSync(src,dfile);
// fs.unlinkSync(src);

// }




//********************************* 
//*************TREE****************
//********************************* 
// function treefn(dirpath)
// {
// if(dirpath==undefined)
// {
//  console.log("--> No directory passed <--")   
// }
// else{
// let doesexist=fs.existsSync(dirpath);
// if(doesexist==false)
// {
//     console.log("--> No such directory exist <--")
// }
// else{
// tree_display(dirpath," ");
// }
// }
// }
// //===
// function tree_display(dirpath,indent)
// {
// let isfile=fs.lstatSync(dirpath).isFile();
// if(isfile==true)
// {let name=path.basename(dirpath);
// console.log(indent+"├──"+name);

// }

// else{
// let name=path.basename(dirpath);
// console.log(indent+"└──"+name);
// let childarr=fs.readdirSync(dirpath);
// for(let i=0;i<childarr.length;i++)
// {let newdir=path.join(dirpath,childarr[i]);
// tree_display(newdir,indent+indent)

// }


// }

// }




