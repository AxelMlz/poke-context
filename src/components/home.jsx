import React, { Component } from 'react'
import { useEffect } from "react";
import { useState } from "react";

function randomNumber() {
	return Math.floor(Math.random() * 875) + 1;
}

function home(){
const [pokemon, setPokemon] = useState();
const [randomPokemon, setRandomPokemon] = useState(1);

  useEffect(()=>{
    setTimeout(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
      .then((res) => res.json())
      .then((res) =>{
        setPokemon(res);
      })
      .caatch((err)=>{
        console.log("Errror while fetcfhing a pokemon",err)
      })   
    }, 1000)
  }, [randomPokemon]);

  const handleClick = () => {
		setRandomPokemon(randomNumber());
	};

    return pokemon ? (
      <>
      <p>Pokedex number : {randomPokemon}</p>
      <p>Pokemon : {pokemon.name}</p>
      <p>height : {pokemon.height}</p>
      <p>weight : {pokemon.weight}</p>
      <button onClick={handleClick}>Get a New Pokemon </button>
      </>
    ) : (
      <div className="loader">Loading...</div>
    )
  }

export default home