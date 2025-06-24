import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Editar Usuario</h2>

      <form *ngIf="usuario" (ngSubmit)="actualizarUsuario()">
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
        <button class="btn btn-primary" type="submit">Actualizar</button>
      </form>

      <div *ngIf="mensaje" class="alert alert-info mt-3">{{ mensaje }}</div>
    </div>
  `
})
export class UsuarioEditarComponent implements OnInit {
  usuario!: Usuario;
  mensaje = '';
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuarioPorId(this.id).subscribe({
      next: (data) => (this.usuario = data),
      error: (err) => {
        console.error('Error al obtener el usuario', err);
        this.mensaje = 'No se pudo cargar el usuario.';
      }
    });
  }

  actualizarUsuario(): void {
    this.usuarioService.actualizarUsuario(this.id, this.usuario).subscribe({
      next: () => {
        this.mensaje = 'Usuario actualizado correctamente.';
        setTimeout(() => this.router.navigate(['/usuarios']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el usuario', err);
        this.mensaje = 'Error al actualizar el usuario.';
      }
    });
  }
}
