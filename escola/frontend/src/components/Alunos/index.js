import React, { useEffect, useState } from 'react'
import AlunoForm from './AlunoForm'
import AlunoLista from './AlunoLista'
import { listar, inserir } from '../../services/aluno.service'

const Alunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(()=> {
        listar()
        .subscribe(alunosDoBackend => setAlunos(alunosDoBackend))
    }, [])

    const onInserir = (aluno) => {
        inserir(aluno)
    }

    return (
        <div>
            <AlunoForm inserirAluno={onInserir}/>
            <AlunoLista alunos={alunos}/>
        </div>
    )
}

export default Alunos