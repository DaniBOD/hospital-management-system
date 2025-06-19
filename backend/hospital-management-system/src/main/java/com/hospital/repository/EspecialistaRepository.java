package com.hospital.repository;

import com.hospital.model.Especialista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EspecialistaRepository extends JpaRepository<Especialista, Long> {
    // Podemos agregar metodos personalizados si es requerido
}
