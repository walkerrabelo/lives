package com.escolalive.api.entities

import javax.persistence.*

@Entity
class Aluno(val nome: String,
            val endereco: String,
            @OneToMany(cascade = [CascadeType.ALL])
            val frequencias: List<Frequencia>,
            @Id
            @GeneratedValue(strategy = GenerationType.AUTO)
            val id: Long = 0)