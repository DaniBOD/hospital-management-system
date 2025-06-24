import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoxService } from '../../app/services/box.service';
import { Box } from '../../models/box.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-box-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
    <div class="container mt-4">
      <h2>Listado de Boxes</h2>
      <a class="btn btn-success mb-3" [routerLink]="['/boxes/crear']">Crear Nuevo Box</a>

      <table class="table table-striped" *ngIf="boxes.length > 0; else sinBoxes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Piso</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let box of boxes">
            <td>{{ box.id }}</td>
            <td>{{ box.nombre }}</td>
            <td>{{ box.piso }}</td>
            <td>{{ box.disponible ? 'Sí' : 'No' }}</td>
            <td>
              <a class="btn btn-sm btn-primary me-2" [routerLink]="['/boxes/editar', box.id]">Editar</a>
              <button class="btn btn-sm btn-danger" (click)="eliminarBox(box.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <ng-template #sinBoxes>
        <div class="alert alert-info">No hay boxes registrados.</div>
      </ng-template>

      <div *ngIf="mensaje" class="alert alert-success mt-3">{{ mensaje }}</div>
    </div>
  `
})
export class BoxListComponent implements OnInit {
  boxes: Box[] = [];
  mensaje = '';

  constructor(private boxService: BoxService) {}

  ngOnInit() {
    this.cargarBoxes();
  }

  cargarBoxes() {
    this.boxService.getBoxes().subscribe(data => this.boxes = data);
  }

  eliminarBox(id?: number) {
    if (id && confirm('¿Estás seguro de eliminar este box?')) {
      this.boxService.eliminarBox(id).subscribe({
        next: () => {
          this.mensaje = 'Box eliminado correctamente';
          this.cargarBoxes(); // Recargar la lista
          setTimeout(() => this.mensaje = '', 3000); 
        },
        error: (err) => {
          console.error('Error detallado:', err);
          this.mensaje = `Error al eliminar: ${err.message}`;
        }
      });
    }
  }
}

