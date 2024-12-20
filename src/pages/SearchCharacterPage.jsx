import React from 'react'
import CharacterCardList from '../components/SearchCharacter/CharacterCardlist'
import CharacterInput from '../components/SearchCharacter/CharacterInput'
import CharacterPagination from '../components/SearchCharacter/CharacterPagination'
import { useState, useEffect } from 'react';



function SearchCharacterPage() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [search, setSearch] = useState('');


    const handleSearch = async (name='',page =1) => {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
            console.log(response);
            const data = await response.json();
            setCharacters(data.results);
            setTotalPages(data.info.pages);
            console.log('TOTAL PAGES', data.info.pages);
        } catch(error){
         setError(error);
        }
    };
    
    useEffect(() => {
        handleSearch('', page);
      }, [page]);
    
    
       

  return (
    <div>
                <CharacterPagination 
                page={page}
                totalPages={totalPages}
                onPrev={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                
                />
                <CharacterInput onSearch = { (name)  =>  handleSearch(name,1) } />
                <CharacterCardList characters ={characters}  />


    </div>
  )
}

export default SearchCharacterPage 