package com.hospital.service;

import com.hospital.model.Usuario;
import com.hospital.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario actualizarUsuario(Long id, Usuario nuevoUsuario) {
        return usuarioRepository.findById(id)
                .map(usuarioExistente -> {
                    usuarioExistente.setNombre(nuevoUsuario.getNombre());
                    usuarioExistente.setCorreo(nuevoUsuario.getCorreo());
                    usuarioExistente.setRol(nuevoUsuario.getRol());
                    return usuarioRepository.save(usuarioExistente);
                })
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + id));
    }

    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
