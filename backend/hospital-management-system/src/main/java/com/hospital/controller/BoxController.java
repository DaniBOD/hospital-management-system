package com.hospital.controller;

import com.hospital.model.Box;
import com.hospital.service.BoxService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/boxes")
@CrossOrigin("*")
public class BoxController {

    private final BoxService boxService;

    public BoxController(BoxService boxService) {
        this.boxService = boxService;
    }

    @GetMapping
    public List<Box> getAllBoxes() {
        return boxService.obtenerTodos();
    }

    @GetMapping("/disponibles")
    public List<Box> getBoxesDisponibles(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fechaHora) {
        return boxService.obtenerDisponibles(fechaHora);
    }

    @PostMapping
    public Box createBox(@RequestBody Box box) {
        return boxService.crearBox(box);
    }

    @PutMapping("/{id}/reservar")
    public Box reservarBox(@PathVariable Long id) {
        return boxService.reservarBox(id);
    }

    @PutMapping("/{id}/liberar")
    public Box liberarBox(@PathVariable Long id) {
        return boxService.liberarBox(id);
    }
}
