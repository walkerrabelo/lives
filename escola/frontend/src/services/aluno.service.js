import { ajax } from 'rxjs/ajax'

const url_aluno = 'http://localhost:8080/aluno'
export const inserir = (aluno) => ajax.post(url_aluno, aluno, { 'Content-Type': 'application/json' } )
export const listar = () => ajax.getJSON(url_aluno)