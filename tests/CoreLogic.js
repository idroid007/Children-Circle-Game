/*
Defining logic for testing in this file
*/

const functions ={
    game:(n,k)=>{
        const childrens=[];
        for(let i=1;i<=n;i++){
          childrens.push(i);
        }
        let index=0;
        while(childrens.length>1){
            index = (index + k - 1) % childrens.length;
            let child  = childrens[index];
            
            childrens.splice(index,1);
        }
        return childrens[0];
    }
}
module.exports=functions;