import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoxService } from '../../app/services/box.service';
import { EspecialistaService } from '../../app/services/especialista.service';
import { Box } from '../../models/box.model';
import { Especialista } from '../../models/especialista.model';

@Component({
  selector: 'app-box-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './box-crear.component.html'
})
export class BoxCrearComponent {
  box: Box = {
    nombre: '',
    piso: 1,
    disponible: true,
    horario: {
      horaInicio: '08:00', // Valor por defecto
      horaFin: '17:00',    // Valor por defecto
      diasDisponibles: []   // Inicializado como array vacío
    },
    especialista: undefined
  };

  especialistas: Especialista[] = [];
  diasDeLaSemana = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  mensaje = '';

  constructor(
    private boxService: BoxService,
    private especialistaService: EspecialistaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.especialistaService.getEspecialistas().subscribe(data => {
      this.especialistas = data;
    });
  }

  onToggleDia(dia: string) {
    const index = this.box.horario.diasDisponibles.indexOf(dia);
    if (index === -1) {
      this.box.horario.diasDisponibles.push(dia);
    } else {
      this.box.horario.diasDisponibles.splice(index, 1);
    }
  }

  crearBox() {
    this.boxService.crearBox(this.box).subscribe({
      next: () => {
        this.mensaje = 'Box creado correctamente.';
        this.router.navigate(['/boxes']);
      },
      error: () => {
        this.mensaje = 'Error al crear box.';
      }
    });
  }
}
