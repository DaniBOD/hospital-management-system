package com.hospital.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class Box {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private int piso;
    private boolean disponible;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Horario horario;

    // --- Métodos de dominio ---

    public void reservar() {
        this.disponible = false;
    }

    public void liberar() {
        this.disponible = true;
    }

    public boolean estaDisponible(LocalDateTime fechaHora) {
        if (!disponible) return false;
        if (horario == null) return true; // Si no tiene horario, está disponible siempre
        
        LocalDate fecha = fechaHora.toLocalDate();
        LocalTime hora = fechaHora.toLocalTime();
        return horario.estaDisponible(fecha, hora);
    }

    public void modificar(Box nuevoBox) {
        this.nombre = nuevoBox.getNombre();
        this.piso = nuevoBox.getPiso();
        this.disponible = nuevoBox.isDisponible();
        if (nuevoBox.getHorario() != null) {
            if (this.horario == null) {
                this.horario = new Horario();
            }
            this.horario.setHoraInicio(nuevoBox.getHorario().getHoraInicio());
            this.horario.setHoraFin(nuevoBox.getHorario().getHoraFin());
            this.horario.setDiasDisponibles(nuevoBox.getHorario().getDiasDisponibles());
        } else {
            this.horario = null;
        }
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

    public int getPiso() {
        return piso;
    }

    public void setPiso(int piso) {
        this.piso = piso;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public Horario getHorario() {
        return horario;
    }

    public void setHorario(Horario horario) {
        this.horario = horario;
    }
}
