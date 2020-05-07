package com.escolalive.api.respositories

import com.escolalive.api.entities.Aluno
import org.springframework.data.jpa.repository.JpaRepository

interface AlunoRepository : JpaRepository<Aluno, Long>