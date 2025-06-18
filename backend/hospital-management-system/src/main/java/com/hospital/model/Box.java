package com.hospital.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Box {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private int piso;

    private boolean disponible;

    @OneToOne(cascade = CascadeType.ALL)
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
        return horario != null && horario.estaDisponible(fechaHora);
    }

    public void modificar(Box nuevoBox) {
        this.nombre = nuevoBox.getNombre();
        this.piso = nuevoBox.getPiso();
        this.disponible = nuevoBox.isDisponible();
        this.horario = nuevoBox.getHorario();
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
