package com.hospital.controller;

import com.hospital.model.Especialista;
import com.hospital.service.EspecialistaService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/especialistas")
@CrossOrigin("*")
public class EspecialistaController {

    private final EspecialistaService especialistaService;

    public EspecialistaController(EspecialistaService especialistaService) {
        this.especialistaService = especialistaService;
    }

    // GET: Obtener todos los especialistas
    @GetMapping
    public List<Especialista> getAllEspecialistas() {
        return especialistaService.obtenerTodos();
    }

    // GET: Obtener especialistas disponibles en una fecha y hora específica
    @GetMapping("/disponibles")
    public List<Especialista> getDisponibles(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fechaHora) {
        return especialistaService.obtenerDisponibles(fechaHora);
    }

    // POST: Crear un especialista (para pruebas o gestión administrativa)
    @PostMapping
    public Especialista createEspecialista(@RequestBody Especialista especialista) {
        return especialistaService.crearEspecialista(especialista);
    }
}
