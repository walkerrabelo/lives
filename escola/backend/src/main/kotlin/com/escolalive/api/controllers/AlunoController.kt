package com.escolalive.api.controllers

import com.escolalive.api.entities.Aluno
import com.escolalive.api.respositories.AlunoRepository
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 86000000)
@RestController
@RequestMapping("/aluno")
class AlunoController(val alunoRepository: AlunoRepository) {

    @GetMapping
    fun listarAlunos() = alunoRepository.findAll()

    @PostMapping
    fun inserir(@RequestBody aluno: Aluno) = alunoRepository.save(aluno)

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) = alunoRepository.delete(alunoRepository.getOne(id))
}