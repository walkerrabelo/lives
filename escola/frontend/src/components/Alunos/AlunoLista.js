import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const AlunoLista = ({alunos}) => {
    return (
      <>
      {alunos &&
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Endereço</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.id}>
                <TableCell component="th" scope="row">{aluno.nome}</TableCell>
                <TableCell align="right">{aluno.endereco}</TableCell>
                <TableCell align="center">
                    <Button variant="outlined" color="primary">Editar</Button>
                    <Button variant="outlined" color="secondary">Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      }
      </>
    )
}

export default AlunoLista