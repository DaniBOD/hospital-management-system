package com.hospital.model;

import jakarta.persistence.*;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
public class Horario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalTime horaInicio;
    private LocalTime horaFin;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private List<DayOfWeek> diasDisponibles;

    public boolean estaDisponible(LocalDate fecha, LocalTime hora) {
        if (diasDisponibles == null || diasDisponibles.isEmpty()) return false;
        if (horaInicio == null || horaFin == null) return false;
        
        DayOfWeek dia = fecha.getDayOfWeek();
        return diasDisponibles.contains(dia)
                && !hora.isBefore(horaInicio)
                && !hora.isAfter(horaFin);
    }

    // --- Getters y Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(LocalTime horaInicio) {
        this.horaInicio = horaInicio;
    }

    public LocalTime getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(LocalTime horaFin) {
        this.horaFin = horaFin;
    }

    public List<DayOfWeek> getDiasDisponibles() {
        return diasDisponibles;
    }

    public void setDiasDisponibles(List<DayOfWeek> diasDisponibles) {
        this.diasDisponibles = diasDisponibles;
    }
}
