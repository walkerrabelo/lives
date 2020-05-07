package com.escolalive.api.respositories

import com.escolalive.api.entities.Frequencia
import org.springframework.data.jpa.repository.JpaRepository

interface FrequenciaRepository : JpaRepository<Frequencia, Long>