package com.hospital.service;

import com.hospital.model.Especialista;
import com.hospital.repository.EspecialistaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EspecialistaService {

    private final EspecialistaRepository especialistaRepository;

    public EspecialistaService(EspecialistaRepository especialistaRepository) {
        this.especialistaRepository = especialistaRepository;
    }

    // Listar todos los especialistas
    public List<Especialista> obtenerTodos() {
        return especialistaRepository.findAll();
    }

    // Filtrar especialistas disponibles en una fecha y hora
    public List<Especialista> obtenerDisponibles(LocalDateTime fechaHora) {
        return especialistaRepository.findAll()
                .stream()
                .filter(e -> e.estaDisponible(fechaHora))
                .collect(Collectors.toList());
    }

    // Crear un especialista (temporal para pruebas)
    public Especialista crearEspecialista(Especialista especialista) {
        return especialistaRepository.save(especialista);
    }
}
