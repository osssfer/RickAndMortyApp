import React from 'react'

function CharacterCardlist({characters}) {


  return (
    
    <div>
            <div className="contenedor-personajes">
                { characters.map((character) =>
                //CARD
                <div
                key={character.id}
                >
                    <h3>{character.name}</h3>
                    <img src={character.image} alt="" />
                </div>
                )
                }
            </div>

    </div>
  )
}

export default CharacterCardlist