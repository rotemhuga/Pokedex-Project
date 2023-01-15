"use strict";
import data from "./data.json" assert { type:"json"};

//colors
let typeColors = {

	normal:   '#A8A77A',
	fire:   '#EE8130',
	water:   '#6390F0',
	electric:   '#F7D02C',
	grass:   '#7AC74C',
	ice:   '#96D9D6',
	fighting:   '#C22E28',
	poison:   '#A33EA1',
	ground:   '#E2BF65',
	flying:   '#A98FF3',
	psychic:   '#F95587',
	bug:   '#A6B91A',
	rock:   '#B6A136',
	ghost:   '#735797',
	dragon:   '#6F35FC',
	dark:   '#705746',
	steel:   '#B7B7CE',
	fairy:   '#D685AD',

};

//All pokemon 

let i = 0
const allPokemon = document.getElementById("all-pokemon");  
function pokemonList (startIndex) {
    for(let i = startIndex; i < startIndex+12; i++) {
        let pokemonDiv = document.createElement ("div");
        pokemonDiv.classList.add("pokemonDiv");
        pokemonDiv.setAttribute("id",i);

        let pokemonId = document.createElement ("div");
        pokemonId.classList.add("pokemonId"); 

        let pokemonImg = document.createElement ("img");
        pokemonImg.classList.add("pokemonImg");
        pokemonImg.src = data[i].image.hires;

        let pokemonName = document.createElement ("div");
        pokemonName.classList.add("pokemonName");
        pokemonName.innerHTML = data[i].name.english;
        
        if(data[i].id<10) {
          pokemonId.innerHTML = "#00" + data[i].id 
        } else if(data[i].id<100) {
          pokemonId.innerHTML = "#0" + data[i].id; 
        } else 
        pokemonId.innerHTML = "#" + data[i].id;

        pokemonDiv.appendChild(pokemonId);
        pokemonDiv.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonName);
        
        allPokemon.appendChild(pokemonDiv)
    }
}

pokemonList(i);

//load more
// let button = document.querySelector('load-more')
// button.addEventListener('click',(event)=> {
// event.preventDefault();
// i+=12; 

// pokemonList(i);
// })


//2 - Modal
  let allModal = document.getElementById("all-modal"); // Get the modal
  function openModal () {
    for (let i = 0; i < 12; i++) {
      
      //card
      let pokemonCardC = document.createElement ("div");
      pokemonCardC.classList.add("pokemonCardC");
      pokemonCardC.setAttribute("id",`myModal-${i}`);

      //content
      let myContentC = document.createElement ("div");
      myContentC.classList.add("myContentC");
      myContentC.setAttribute("id",`myContent-${i}`);

      //Left content div
      let leftContentC = document.createElement ("div");
      leftContentC.classList.add("leftContentC");

      //id
      let pokemonIdC = document.createElement ("div");
      pokemonIdC.classList.add("pokemonIdC"); 
      if(data[i].id<10) {
        pokemonIdC.innerHTML = "#00" + data[i].id 
      } else if(data[i].id<100) {
        pokemonIdC.innerHTML = "#0" + data[i].id; 
      } else 
      pokemonIdC.innerHTML = "#" + data[i].id;

      //img
      let pokemonImgC = document.createElement ("img");
      pokemonImgC.classList.add("pokemonImgC");
      pokemonImgC.src = data[i].image.hires;

      //name
      let pokemonNameC = document.createElement ("div");
      pokemonNameC.classList.add("pokemonNameC");
      pokemonNameC.innerHTML = data[i].name.english;

      //Types
      let pokeType1Father = document.createElement ("div");
      pokeType1Father.classList.add("pokeType1Father");
      
      //  types colors 
      for (let J = 0; J<data[i]["type"].length; J++){
          let color = typeColors[data[i]["type"][J].toLowerCase()]
          let pokeType1C = document.createElement("button");
          pokeType1C.classList.add(`pokeType1C`);
          pokeType1C.setAttribute("id", `pokeType1C-"[i]"`);
          pokeType1C.style.backgroundColor = color;
          pokeType1C.innerHTML = data[i]["type"][J];
          pokeType1Father.appendChild(pokeType1C);
      }

      leftContentC.appendChild(pokemonIdC);
      leftContentC.appendChild(pokemonImgC);
      leftContentC.appendChild(pokemonNameC);
      leftContentC.appendChild(pokeType1Father);

      //right content div
      let rightContentC = document.createElement ("div");
      rightContentC.classList.add("rightContentC");

      //All description
      let allDescC = document.createElement ("div");
      allDescC.classList.add("allDescC");

      //description title
      let pokemonDescC = document.createElement ("div");
      pokemonDescC.classList.add("pokemonDescC");
      pokemonDescC.innerHTML = 'Description' 

      //description content
      let DescContentC = document.createElement ("div");
      DescContentC.classList.add("DescContentC");
      DescContentC.innerHTML = data[i].description;

      allDescC.appendChild(pokemonDescC)
      allDescC.appendChild(DescContentC)

      //All stats
      let allStatsC = document.createElement ("div");
      allStatsC.classList.add("allStatsC");

      //stats title
      let pokemonStatsC = document.createElement ("div");
      pokemonStatsC.classList.add("pokemonStatsC");
      pokemonStatsC.innerHTML = 'Stats'

      //stats content
      let statsContentLeftC = document.createElement ("div");
      statsContentLeftC.classList.add("statsContentLeftC");
      statsContentLeftC.innerHTML = (`HP: ${data[i].base.HP}<br> Attack: ${data[i].base.Attack}<br> Defense: ${data[i].base.Defense}`)

      let statsContentmiddleC = document.createElement ("div");
      statsContentmiddleC.classList.add("statsContentmiddleC");
      statsContentmiddleC.innerHTML = (`Special Atk: ${data[i].base['Sp. Attack']}<br>  Special Def: ${data[i].base['Sp. Defense']}<br>  Speed: ${data[i].base['Speed']}`)

      //Total amount - Stats content
      let array = [data[i].base.HP, data[i].base.Attack, data[i].base.Defense, data[i].base["Sp. Attack"], data[i].base["Sp. Defense"], data[i].base.Speed]
      let pokemonTotalrightC = document.createElement ("div");
      pokemonTotalrightC.classList.add("pokemonTotalrightC");
      pokemonTotalrightC.innerHTML = 'Total:' + array.reduce((accumulator, currentValue) => accumulator + currentValue);

      //stats row
      let statsRow = document.createElement ("div");
      statsRow.classList.add("statsRow");
      statsRow.appendChild(statsContentLeftC);
      statsRow.appendChild(statsContentmiddleC);
      statsRow.appendChild(pokemonTotalrightC);
      
      allStatsC.appendChild(pokemonStatsC)
      allStatsC.appendChild(statsRow)

      rightContentC.appendChild(allDescC);
      rightContentC.appendChild(allStatsC);

       //span
       let span = document.createElement("span");
       span.className = "close";
       span.setAttribute("id",`span-${i}`);
       span.innerHTML = "X"

       let pokemonLike = document.createElement("img");
       pokemonLike.classList.add("pokemonLike");
       pokemonLike.src = "./Vector.png";


      myContentC.appendChild(span); 
      myContentC.appendChild(leftContentC); 
      myContentC.appendChild(rightContentC);
      myContentC.appendChild(pokemonLike);  
      pokemonCardC.appendChild(myContentC); 
      allModal.appendChild(pokemonCardC); 

    }
  }
  openModal ()

  for (let i = 0; i < 12; i++) {
    let pokemon1 = document.getElementById(i);    
    pokemon1.addEventListener("click", function () {
      document.getElementById(`myModal-${i}`).style.display = "block";
    })
     
      let span = document.getElementById(`span-${i}`);
      span.addEventListener("click", function() {
      document.getElementById(`myModal-${i}`).style.display = "none";
      })
 
    window.onclick = function(event) { 
      if (event.target == "all-modal") {
        allModal.style.display = "none ";
      
      }
    }
}
 