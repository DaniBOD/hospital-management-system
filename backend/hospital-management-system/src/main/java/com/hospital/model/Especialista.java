package com.hospital.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class Especialista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String especialidad;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Horario horario;

    public boolean estaDisponible(LocalDateTime fechaHora) {
        if (horario == null) return true;
        LocalDate fecha = fechaHora.toLocalDate();
        LocalTime hora = fechaHora.toLocalTime();
        return horario.estaDisponible(fecha, hora);
    }

    // --- Getters y Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public Horario getHorario() {
        return horario;
    }

    public void setHorario(Horario horario) {
        this.horario = horario;
    }
}
