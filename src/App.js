import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // string
  const [pokemonName, setPokemonName] = useState("");
  // boolean
  const [chosen, setChosen] = useState(false);
  // object
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  document.addEventListener("keydown", ((e) => {
    if(e.key === "Enter") {
      searchPokemon()
    }
    
}))
  // search function for the fetch 
  const searchPokemon = () =>{
    // import the data using hook to the api in axios
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res)=>{
      console.log(res)
      setPokemon()
    })
  }
  

  return (
    <div className="App">
      <div className="TitleSection">
      <h1>Pokemon Stats</h1>
      <input type="text"
       placeholder='Pokemon'
       onChange={(event)=>{
        setPokemonName(event.target.value);
       }}
       />
      <button onClick={searchPokemon}>Search</button>
      
      </div>
      <div className="DisplaySection">
       {!chosen ? (<h1>Please choose a Pokemon</h1>) : (
       <>
       <h1>{pokemon.name}</h1>
       <img src={pokemon.img} alt="" />
       <h3>Species: {pokemon.species}</h3>
       <h4>Health: {pokemon.hp}</h4>
       <h4>Attack: {pokemon.attack}</h4>
       <h4>Defense: {pokemon.defense}</h4>
       <h4>Type: {pokemon.type}</h4>
       </>
       
       )}
      </div>
    </div>
  );
}

export default App;
