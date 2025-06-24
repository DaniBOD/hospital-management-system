import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
    <div class="container mt-4">
      <h2>Lista de Usuarios</h2>
      <table class="table table-striped mt-3" *ngIf="usuarios.length > 0; else sinUsuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let usuario of usuarios">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.correo }}</td>
            <td>{{ usuario.rol }}</td>
            <td>
              <a class="btn btn-sm btn-warning me-2" [routerLink]="['/usuarios/editar', usuario.id]">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>

      <ng-template #sinUsuarios>
        <p>No hay usuarios registrados.</p>
      </ng-template>
    </div>
  `,
  styles: []
})
export class UsuariosListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al obtener usuarios:', err)
    });
  }
}
