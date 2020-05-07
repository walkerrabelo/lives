package com.escolalive.api.entities

import java.util.*
import javax.persistence.*

@Entity
class Frequencia (
        val data: Date,
        var presente: Boolean,
        @Id
                    @GeneratedValue(strategy = GenerationType.AUTO)
                    val id: Long)