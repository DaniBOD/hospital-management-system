package com.hospital.controller;

import com.hospital.model.Box;
import com.hospital.service.BoxService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/boxes")
public class BoxController {

    private final BoxService boxService;

    public BoxController(BoxService boxService) {
        this.boxService = boxService;
    }

    // Obtener todos los boxes
    @GetMapping
    public List<Box> getAllBoxes() {
        return boxService.obtenerTodos();
    }

    // Obtener box por ID (usado para editar en el frontend)
    @GetMapping("/{id}")
    public Box getBoxById(@PathVariable Long id) {
        return boxService.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Box no encontrado con ID: " + id));
    }

    // Obtener boxes disponibles en una fecha y hora
    @GetMapping("/disponibles")
    public List<Box> getBoxesDisponibles(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fechaHora) {
        return boxService.obtenerDisponibles(fechaHora);
    }

    // Crear nuevo box
    @PostMapping
    public Box createBox(@RequestBody Box box) {
        return boxService.crearBox(box);
    }

    // Actualizar box completo (incluyendo especialista y horario)
    @PutMapping("/{id}")
    public Box actualizarBox(@PathVariable Long id, @RequestBody Box nuevoBox) {
        return boxService.actualizarBox(id, nuevoBox);
    }

    // Eliminar box
    @DeleteMapping("/{id}")
    public void eliminarBox(@PathVariable Long id) {
        boxService.eliminarBox(id);
    }

    // Reservar
    @PutMapping("/{id}/reservar")
    public Box reservarBox(@PathVariable Long id) {
        return boxService.reservarBox(id);
    }

    // Liberar
    @PutMapping("/{id}/liberar")
    public Box liberarBox(@PathVariable Long id) {
        return boxService.liberarBox(id);
    }
}
