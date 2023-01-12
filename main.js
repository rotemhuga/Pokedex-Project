"use strict";
import data from "./data.json" assert { type:"json"};
// let id = data[i].id
// console.log(id)
// let name = data[i].name.english
// let image = data[i].image.hires


// const pokemon = data[0];
// console.log(pokemon)
// const allPokemon = document.querySelector("#all-pokemon");  

// function addPokemon() {
//     allPokemon.innerHTML = "";  // Clear any existing Pokemon
//     for (let i = 0; i < 12; i++) {
//         const pokemon = data[i];
//         // let pokemonImg = data[counter].image.hires;

//         const li = document.createElement("li");
//         let image = document.createElement("img");
//         image.src = pokemon.image.hires;
//         console.log(pokemon.image.hires)
//         li.innerHTML = `
//             <div>#00${pokemon.id}</div>
//             <img src=${pokemon.image.hires}/>
//             <div>${pokemon.name.english}</div>
//         `;   
//         // li.className = pokemon.id; 
//         allPokemon.appendChild(li);
//     }
// }

// addPokemon();

//1
// const allPokemon = document.getElementById("all-pokemon");  
// function addPokemon() {
//     for (let i = 0; i < 12; i++) {
        
//         let pokemonDiv = document.createElement ("div");
//         pokemonDiv.classList.add("pokemonDiv");

//         let pokemonId = document.createElement ("div");
//         pokemonId.classList.add("pokemonId"); 

//         let pokemonImg = document.createElement ("img");
//         pokemonImg.classList.add("pokemonImg");
//         pokemonImg.src = data[i].image.hires;

//         let pokemonName = document.createElement ("div");
//         pokemonName.classList.add("pokemonName");
//         pokemonName.innerHTML = data[i].name.english;
        
        
//         if(data[i].id<10) pokemonId.innerHTML = "#00" + data[i].id;
//         else if(data[i].id<100) pokemonId.innerHTML = "#0" + data[i].id;
//         else ;

//         pokemonDiv.appendChild(pokemonId);
//         pokemonDiv.appendChild(pokemonImg);
//         pokemonDiv.appendChild(pokemonName);
        
//         allPokemon.appendChild(pokemonDiv)

//     }
// }

// addPokemon();

//load more
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

// let button = document.querySelector('load-more')
// button.addEventListener('click',(event)=> {
// event.preventDefault();
// i+=12; 

// pokemonList(i);
// })


//2 - Modal
let allModal = document.getElementById("all-modal"); // Get the modal
// let btn = document.getElementById((i)); // Get the button that opens the modal

  
  function openModal () {
    for (let i = 0; i < 13; i++) {
       
      //content
      let myContent = document.createElement ("div");
      myContent.classList.add("myContent");
      myContent.setAttribute("id",`mycontent-${i}`);

      //card
      let pokemonCard = document.createElement ("div");
       pokemonCard.classList.add("pokemonCard");
       pokemonCard.setAttribute("id",`myModal-${i}`);

      //id
      let pokemonId = document.createElement ("div");
      pokemonId.classList.add("pokemonId"); 
      if(data[i].id<10) {
        pokemonId.innerHTML = "#00" + data[i].id 
      } else if(data[i].id<100) {
        pokemonId.innerHTML = "#0" + data[i].id; 
      } else 
      pokemonId.innerHTML = "#" + data[i].id;

      //img
      let pokemonImg = document.createElement ("img");
      pokemonImg.classList.add("pokemonImg");
      pokemonImg.src = data[i].image.hires;

      //name
      let pokemonName = document.createElement ("div");
      pokemonName.classList.add("pokemonName");
      pokemonName.innerHTML = data[i].name.english;

      //Types
      let pokeType1 = document.createElement ("button");
      pokeType1.classList.add("pokeType1");
      pokeType1.innerHTML = data[i].type[0];

      let pokeType2 = document.createElement ("button");
      pokeType2.classList.add("pokeType2");
        if (data[i].type[1] === "") {
          pokeType2.innerHTML = "";
        } else {
         pokeType2.innerHTML = data[i].type[1];
      }

      //description title
      let pokemonDesc = document.createElement ("div");
      pokemonDesc.classList.add("pokemonDesc");
      pokemonDesc.innerHTML = 'Description:' 

      //description content
      let DescContent = document.createElement ("div");
      DescContent.classList.add("DescContent");
      DescContent.innerHTML = data[i].description;

      //stats title
      let pokemonStats = document.createElement ("div");
      pokemonStats.classList.add("pokemonStats");
      pokemonStats.innerHTML = 'Stats:'
      console.log(pokemonStats);

      //stats
      let statsContent = document.createElement ("div");
      statsContent.classList.add("statsContent");
      statsContent.innerHTML = JSON.stringify(data[i].base);
      console.log(statsContent);

      //Total amount
      let array = [data[i].base.HP, data[i].base.Attack, data[i].base.Defense, data[i].base["Sp. Attack"], data[i].base["Sp. Defense"], data[i].base.Speed]
      // console.log(array)
      let pokemonTotal = document.createElement ("div");
      pokemonTotal.classList.add("pokemonTotal");
      pokemonTotal.innerHTML = 'Total:' + array.reduce((accumulator, currentValue) => accumulator + currentValue);

      pokemonCard.appendChild(pokemonId);
      pokemonCard.appendChild(pokemonImg);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokeType1);
      pokemonCard.appendChild(pokeType2);
      pokemonCard.appendChild(pokemonDesc);
      pokemonCard.appendChild(DescContent);
      pokemonCard.appendChild(pokemonStats);
      pokemonCard.appendChild(statsContent);
      pokemonCard.appendChild(pokemonTotal);

      allModal.appendChild(pokemonCard); 

    }
  }
  openModal ()

  for (let i = 0; i < 13; i++) {
    let pokemon = document.getElementById(i);
    pokemon.addEventListener("click", function () {
      document.getElementById(`myModal-${i}`).style.display = "block";
      })
      let span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the moda
      span.setAttribute("id",`span-${i}`);
      span.addEventListener("click", function() {
        document.getElementById(`span-${i}`).style.display = "none";
      })
      // span.onclick = function () { // When the user clicks on <span> (x), close the modal
      // allModal.style.display = "none";
      // }
    window.onclick = function(event) { // When the user clicks anywhere outside of the modal, close it
      if (event.target == allModal) {
        allModal.style.display = "none";
      }
    }
  }



