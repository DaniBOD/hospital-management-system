package com.hospital.repository;

import com.hospital.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    // Aquí podemos agregar búsquedas personalizadas en el futuro
}
