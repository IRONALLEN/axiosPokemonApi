import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((response) => {
        setPokemon(response.data.results);
      });
  }, [pokemon]);

  return (
    <div className='FetchPokemon'>
      <form>
        <button onClick={useEffect}>Fetch Pokemon</button>
        <ul>
          {pokemon.length > 0 &&
            pokemon.map((pokemon, index) => {
              return (
                <div key={index}>
                  <li>{pokemon.name}</li>
                </div>
              );
            })}
        </ul>
      </form>
    </div>
  );
};
export default AxiosPokemon;
