package com.hospital.controller;

import com.hospital.model.Reserva;
import com.hospital.service.ReservaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin("*")
public class ReservaController {

    private final ReservaService reservaService;

    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    // GET: Listar todas las reservas
    @GetMapping
    public List<Reserva> getAllReservas() {
        return reservaService.obtenerTodas();
    }

    // POST: Crear una nueva reserva
    @PostMapping
    public Reserva createReserva(@RequestBody Reserva reserva) {
        return reservaService.crearReserva(reserva);
    }

    // DELETE: Eliminar una reserva
    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable Long id) {
        reservaService.eliminarReserva(id);
    }
}
