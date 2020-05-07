import React from 'react'
import ItemFrequencia from './ItemFrequencia'

const Frequencia = ({frequencias}) => {
    return (
        <>{
            frequencias.map(itemFrequencia => 
                <ItemFrequencia itemFrequencia={itemFrequencia} key={itemFrequencia.id}/>)                
          }
        </>
    )
}

export default Frequencia