package com.escolalive.api.controllers

import com.escolalive.api.respositories.FrequenciaRepository
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 86000000)
@RestController
@RequestMapping("/frequencia")
class FrequenciaController (val frequenciaRepository: FrequenciaRepository) {

    @GetMapping("/alterar/{id}")
    fun marcarFrequencia(@PathVariable id:Long) : Boolean {
        val frequencia = frequenciaRepository.getOne(id)
        frequencia.presente = !frequencia.presente
        frequenciaRepository.save(frequencia)
        return frequencia.presente
    }
}