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
    
    let childrens=Game.createPlayers(n);
    let index=0;
    while(childrens.length>1){
        index = (index + k - 1) % childrens.length;
        let child  = childrens[index];
        Game.displaySequence(child);
        console.log("child out is:"+child.id);
        childrens.splice(index,1);
    }
      Game.displayWinner(childrens[0])
    }
}

//Event For inputs
let form = document.forms.game;

  form.onsubmit=(e)=>{
  e.preventDefault();
  //converting string to number
  let n=form.n.value*1;
  let k = form.k.value*1;

  //validation
  if(n!="" && !isNaN(n) && !isNaN(k)){
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