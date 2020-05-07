import React, { useState } from 'react'

const ItemFrequencia = ({
    itemFrequencia
}) => {

    const [ presenca, setPresenca ] = useState(itemFrequencia.presente)

    const alterarPresenca = () => {
        fetch(`http://localhost:8080/frequencia/alterar/${itemFrequencia.id}`)
        .then(result => result.json())
        .then(presencaFinal => {
            setPresenca(presencaFinal)
        })
    }
    return (
        <div onClick={alterarPresenca} className={presenca ? "frequencia-card-presente" : "frequencia-card-ausente"}>
            <span>{itemFrequencia.data}</span>
            {presenca ? <span className="presenca">Presente</span>
                : <span className="presenca">Ausente</span>}
        </div>
    )
}

export default ItemFrequencia