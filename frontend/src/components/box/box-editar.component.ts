import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoxService } from '../../app/services/box.service';
import { Box } from '../../models/box.model';

@Component({
  selector: 'app-box-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4" *ngIf="box">
      <h2>Editar Box</h2>
      <form (ngSubmit)="editarBox()">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input [(ngModel)]="box.nombre" name="nombre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Piso</label>
          <input type="number" [(ngModel)]="box.piso" name="piso" class="form-control" required />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" [(ngModel)]="box.disponible" name="disponible" class="form-check-input" />
          <label class="form-check-label">Disponible</label>
        </div>

        <div *ngIf="box.horario">
          <div class="mb-3">
            <label class="form-label">Días disponibles</label><br />
            <div *ngFor="let dia of diasSemana" class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                [checked]="box.horario.diasDisponibles.includes(dia)"
                (change)="onToggleDia(dia)"
                id="{{ dia }}"
              />
              <label class="form-check-label" [for]="dia">{{ dia }}</label>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Hora Inicio</label>
            <input
              type="time"
              [(ngModel)]="box.horario.horaInicio"
              name="horaInicio"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Hora Fin</label>
            <input
              type="time"
              [(ngModel)]="box.horario.horaFin"
              name="horaFin"
              class="form-control"
              required
            />
          </div>
        </div>

        <button class="btn btn-primary" type="submit">Actualizar</button>
      </form>
      <div *ngIf="mensaje" class="alert alert-success mt-3">{{ mensaje }}</div>
    </div>
  `
})
export class BoxEditarComponent implements OnInit {
  box!: Box;
  mensaje = '';
  diasSemana = [
    'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY',
    'FRIDAY', 'SATURDAY', 'SUNDAY'
  ];

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.boxService.getBox(id).subscribe(data => {
      this.box = data;

      // Asegura que el objeto horario esté presente para evitar errores
      if (!this.box.horario) {
        this.box.horario = {
          horaInicio: '',
          horaFin: '',
          diasDisponibles: []
        };
      }
    });
  }

  onToggleDia(dia: string) {
    if (!this.box.horario) return;

    const index = this.box.horario.diasDisponibles.indexOf(dia);
    if (index === -1) {
      this.box.horario.diasDisponibles.push(dia);
    } else {
      this.box.horario.diasDisponibles.splice(index, 1);
    }
  }

  editarBox() {
    this.boxService.editarBox(this.box).subscribe({
      next: () => this.mensaje = 'Box actualizado correctamente.',
      error: () => this.mensaje = 'Error al actualizar box.'
    });
  }
}
