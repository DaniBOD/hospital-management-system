package com.hospital.repository;

import com.hospital.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Podemos agregar métodos personalizados más adelante (por correo, por rol, etc.)
}
