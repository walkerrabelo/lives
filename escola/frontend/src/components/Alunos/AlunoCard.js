import React from 'react'
import Frequencia from '../Frequencia/Frequencia'

const AlunoCard = ({
    aluno
}) => {
    return (
        <div className="aluno-card">
            <div>{`Nome: ${aluno.nome}`}</div>
            <div>{`Endereço: ${aluno.endereco}`}</div>
            <Frequencia frequencias={aluno.frequencias}/>
        </div>
    )
}

export default AlunoCard