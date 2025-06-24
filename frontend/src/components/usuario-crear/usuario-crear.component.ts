import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Crear Usuario</h2>
      <form (ngSubmit)="crearUsuario()">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input [(ngModel)]="usuario.nombre" name="nombre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input [(ngModel)]="usuario.correo" name="correo" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Rol</label>
          <select [(ngModel)]="usuario.rol" name="rol" class="form-select" required>
            <option value="ADMINISTRADOR">Administrador</option>
            <option value="RECEPCIONISTA">Recepcionista</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Guardar</button>
      </form>
      <div *ngIf="mensaje" class="alert alert-success mt-3">{{ mensaje }}</div>
    </div>
  `
})
export class UsuarioCrearComponent {
  usuario: Usuario = {
    nombre: '',
    correo: '',
    rol: 'RECEPCIONISTA'
  };

  mensaje = '';

  constructor(private usuarioService: UsuarioService) {}

  crearUsuario() {
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: () => {
        this.mensaje = 'Usuario creado exitosamente.';
        this.usuario = { nombre: '', correo: '', rol: 'RECEPCIONISTA' };
      },
      error: (error) => {
        console.error('Error al crear usuario:', error);
        this.mensaje = 'Hubo un error al crear el usuario.';
      }
    });
  }
}
