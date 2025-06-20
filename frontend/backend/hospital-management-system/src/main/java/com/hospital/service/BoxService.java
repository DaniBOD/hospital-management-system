package com.hospital.service;

import com.hospital.model.Box;
import com.hospital.repository.BoxRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BoxService {

    private final BoxRepository boxRepository;

    public BoxService(BoxRepository boxRepository) {
        this.boxRepository = boxRepository;
    }

    // Obtener todos los boxes
    public List<Box> obtenerTodos() {
        return boxRepository.findAll();
    }

    // Obtener boxes disponibles en una fecha y hora
    public List<Box> obtenerDisponibles(LocalDateTime fechaHora) {
        return boxRepository.findAll()
                .stream()
                .filter(box -> box.estaDisponible(fechaHora))
                .collect(Collectors.toList());
    }

    // Crear nuevo box
    public Box crearBox(Box box) {
        return boxRepository.save(box);
    }

    // Reservar un box por ID
    public Box reservarBox(Long id) {
        Optional<Box> boxOpt = boxRepository.findById(id);
        if (boxOpt.isEmpty()) {
            throw new RuntimeException("Box no encontrado con ID: " + id);
        }
        Box box = boxOpt.get();
        box.reservar();
        return boxRepository.save(box);
    }

    // Liberar un box por ID
    public Box liberarBox(Long id) {
        Optional<Box> boxOpt = boxRepository.findById(id);
        if (boxOpt.isEmpty()) {
            throw new RuntimeException("Box no encontrado con ID: " + id);
        }
        Box box = boxOpt.get();
        box.liberar();
        return boxRepository.save(box);
    }
}
