import React, { useRef } from 'react'

function CharacterInput({onSearch}) {
    
const inputRef = useRef(null);

const  handleOnSearch = () => {
        onSearch(inputRef.current.value);
        console.log('EL VALOR', inputRef.current.value);
    }



  return (
    <div>

      <input 
            type="text"
            placeholder="Buscar personaje"
            ref={inputRef}
            />

            <button
            onClick={handleOnSearch}
            >
                BUSCAR
            </button>

    </div>
  )
}

export default CharacterInput