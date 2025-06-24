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

    // Obtener box por ID
    public Optional<Box> obtenerPorId(Long id) {
        return boxRepository.findById(id);
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

    // Actualizar box (se usa desde PUT /api/boxes/{id})
    public Box actualizarBox(Long id, Box nuevoBox) {
        return boxRepository.findById(id)
                .map(boxExistente -> {
                    boxExistente.modificar(nuevoBox);
                    boxExistente.setEspecialista(nuevoBox.getEspecialista()); // Asegura que se actualice también el especialista
                    return boxRepository.save(boxExistente);
                })
                .orElseThrow(() -> new RuntimeException("Box no encontrado con ID: " + id));
    }

    // Eliminar box
    public void eliminarBox(Long id) {
      if (!boxRepository.existsById(id)) {
          throw new RuntimeException("Box no encontrado con ID: " + id);
      }

      try {
          boxRepository.deleteById(id);
      } catch (Exception e) {
          throw new RuntimeException("No se pudo eliminar el box. ¿Tiene reservas activas?");
      }
    }


    // Reservar un box
    public Box reservarBox(Long id) {
        return boxRepository.findById(id)
                .map(box -> {
                    box.reservar();
                    return boxRepository.save(box);
                })
                .orElseThrow(() -> new RuntimeException("Box no encontrado con ID: " + id));
    }

    // Liberar un box
    public Box liberarBox(Long id) {
        return boxRepository.findById(id)
                .map(box -> {
                    box.liberar();
                    return boxRepository.save(box);
                })
                .orElseThrow(() -> new RuntimeException("Box no encontrado con ID: " + id));
    }
}
