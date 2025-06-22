import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent
} from '@coreui/angular';

@Component({
  selector: 'app-colors',
  standalone: true, // esto habilita los imports directos
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent
  ],
  templateUrl: './colors.component.html',
})
export class ColorsComponent {
  asignaturas = [
    { nombre: 'Cálculo III', nota: 5.7 },
    { nombre: 'Paradigmas de la Programación', nota: 6.1 },
    { nombre: 'Electricidad y Magnetismo', nota: 5.3 },
    { nombre: 'Base de Datos', nota: 6.0 },
    { nombre: 'Inglés III', nota: 5.8 },
    { nombre: 'Estructura y Algoritmos', nota: 5.5 }
  ];
}
