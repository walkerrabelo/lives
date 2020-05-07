package com.escolalive.api.controllers

import com.escolalive.api.respositories.AlunoRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 86000000)
@RestController
@RequestMapping("/escola")
class EscolaController(val alunoRepository: AlunoRepository) {

    @GetMapping
    fun teste() = "Testando API Escola"

}