import React from 'react'

export default function PokemonList( {pokemon} ) {
  return (
    <div>
        {pokemon.map((poke) => {
            return <div key = {poke}>{poke}</div>
        })}
    </div>
  )
}
