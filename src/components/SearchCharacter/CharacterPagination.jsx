import React from 'react'

function CharacterPagination( {page,totalPages, onPrev, onNext} ) {


    console.log('PAGE', page);
    console.log('TOTAL PAGES', totalPages);

  return (
    
    <div>
            <button
            onClick={onPrev}
            disabled={page === 1}
            >
                PAGINA ANTERIOR
            </button>

            <button
            onClick={onNext}
            disabled={page === totalPages}

            >    
                PAGINA SIGUIENTE
            </button>


    </div>
  )
}

export default CharacterPagination