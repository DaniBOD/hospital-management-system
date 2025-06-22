package com.hospital.controller;

import com.hospital.model.Usuario;
import com.hospital.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // GET: Listar todos los usuarios
    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.obtenerTodos();
    }

    // GET: Obtener un usuario por ID
    @GetMapping("/{id}")
    public Usuario getUsuarioById(@PathVariable Long id) {
        return usuarioService.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + id));
    }

    // POST: Crear un nuevo usuario
    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuarioService.crearUsuario(usuario);
    }

    // PUT: Modificar un usuario
    @PutMapping("/{id}")
    public Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario nuevoUsuario) {
        return usuarioService.actualizarUsuario(id, nuevoUsuario);
    }

    // DELETE: Eliminar un usuario
    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.eliminarUsuario(id);
    }
}
