class Person{
  constructor(id,name){
      this.id = id
      this.name=name;
  }
}
class Game{
  //insert players to array
   static createPlayers(n){
        let players=[];
        for(let i=1;i<=n;i++){
            players.push(new Person(i,"player"+i))
        }
        Game.displayPlayers(players)
        return players;
    }
   static displaySequence(player){
      
      let container = document.querySelector("#sequence")
      let figure = document.createElement("figure");
      let img = document.createElement("img");
      img.setAttribute("src","child.png");
      let figcaption = document.createElement("figcaption");
      figcaption.appendChild(document.createTextNode(player.name))
      figure.appendChild(img);
      figure.appendChild(figcaption);
      
      container.appendChild(figure);
    }
    static displayPlayers(players){
      let container = document.querySelector("#players");
      let h1 = document.createElement("H1");
      h1.appendChild(document.createTextNode("Players"))
      container.appendChild(h1);
      for(let player of players){
      let figure = document.createElement("figure");
      let img = document.createElement("IMG");
      img.setAttribute("src","child.png");
      let figcaption = document.createElement("figcaption");
      figcaption.appendChild(document.createTextNode(player.name))
      figure.appendChild(img);
      figure.appendChild(figcaption);
      container.appendChild(figure);
      }
      let sequence = document.querySelector("#sequence");
      let h1_sequence = document.createElement("h1");
        h1_sequence.appendChild(document.createTextNode("Sequence"));
        sequence.appendChild(h1_sequence);
    }
   static displayWinner(player){
      let container = document.querySelector("#winner");
      let h1 = document.createElement("h1");
      h1.appendChild(document.createTextNode("Winner"));
      container.appendChild(h1);
      let figure = document.createElement("figure");
      let img = document.createElement("img");
      img.setAttribute("src","child.png");
      let figcaption = document.createElement("figcaption");
      figcaption.appendChild(document.createTextNode(player.name))
      figure.appendChild(img);
      figure.appendChild(figcaption);
      container.appendChild(figure);
    }
   static findWinner(n,k){
    //calling create players function to get players
    let childrens=Game.createPlayers(n);
    // pointer is pointing the element which needs to be removed from an childrens array
    let pointer=0;
    /*
      The core logic is in While loop
      complexity of the logic Time: O(n) (n=number of child in childrens)
                          
      In our array childrens, we are removing children 1 by 1 on the basis of
      pointer. so this loop will execute (n-1) times.

    */
    while(childrens.length>1){
        /*
         explanation of pointer
         if n=5 & k=2
         then
         [p1,p2,p3,p4,p5] in childrens & lendth = 5
         so in first iteration, kth child needs to be removed so
         in pointer we will get 1.
         pointer(1) index in childrens array i.e 2nd element we are slicing from array.

         In 2nd iteration, we are left with childrens [p1,p3,p4,p5] & length =4
         pointer pointing 1 index element and formular will run again
         pointer = 2 & we are slicing 3rd element from sliced array.

         In 3rd iteration, we are left with [p1,p3,p5] & length = 3
         this login will execute unless 1 element left in childrens array and the last 
         element will be the winner

        */
        pointer = (pointer + k - 1) % childrens.length;
        let child  = childrens[pointer];
        Game.displaySequence(child);
        
        childrens.splice(pointer,1);
    }
      Game.displayWinner(childrens[0])
    }
}

//Event For inputs
let form = document.forms.game;

  form.onsubmit=(e)=>{
  e.preventDefault();

  //converting input values from string to number
  let n=form.n.value*1;
  let k = form.k.value*1;

  //validation - checking input values are number and n & k !=0
  if(n!="" && !isNaN(n) && !isNaN(k) && n!==0 &&k!==0){
    //calling game logic
      Game.findWinner(form.n.value*1,form.k.value*1);
  }else{
    alert("Validation error")
  }


   form.style.display="none";
  }


/*
Core Logic
*/
/*
 while(childrens.length>1){
      index = (index + k - 1) % childrens.length;
      let child  = childrens[index];
      console.log("child out is:"+child.id);
      childrens.splice(index,1);
  }
  */