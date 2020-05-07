import React, { useRef } from 'react'
import Button from '@material-ui/core/Button';

const AlunoForm = ({inserirAluno}) => {

    const inputName = useRef(null)
    const inputEndereco = useRef(null)
    
    const salvar = () => {
        inserirAluno({nome: inputName.current.value, endereco: inputEndereco.current.value, frequencias: []})
    }

    return(
        <div className="aluno-form-container">
             <input className="aluno-input-nome" ref={inputName} placeholder="Nome do Aluno"/>
             <input className="aluno-input-endereco" ref={inputEndereco} placeholder="Endereço"/>
             <Button onClick={salvar}>Salvar</Button>
        </div>
    )
}

export default AlunoForm