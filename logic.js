 class Game{
     static  findWinner(n,k){
          let childrens= Game.fillChildrens(n);
        let length  =  childrens.length-1;
        let pointer =0;
      let counter =0;
        let start = childrens[k];
          while( length !==1){
              pointer= (pointer+k)%length;
              console.log(pointer)
            let removed= childrens.splice(pointer,1);
            console.log("first children out is"+removed);
              console.log(removed)
             length=childrens.length-1;
           
          }
     }

     
     static fillChildrens(n){
         let childrens = [];
       for(let i=1;i<=n;i++){
         childrens[i]=i
       }
     return childrens;
     }

   
 }
 
 Game.findWinner(5,2)