import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Agrega esto
import { Router } from '@angular/router'; // <-- Agrega esto


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] // <-- Agrega CommonModule aquí
})
export class EncuestaComponent {
  constructor(private router: Router) {}
  preguntas = [
    {
      texto: 'Calidad general del curso',
      respuesta: null as number | null
    },
    {
      texto: 'Nivel de dificultad',
      respuesta: null as number | null
    },
    {
      texto: 'Utilidad de los materiales proporcionados',
      respuesta: null as number | null
    },
    {
      texto: 'Claridad de los objetivos del curso',
      respuesta: null as number | null
    },
    {
      texto: 'Adecuación de la carga de trabajo',
      respuesta: null as number | null
    }
  ];

  comentarios: string = '';

  submitForm() {
    const evaluacion = {
      preguntas: this.preguntas,
      comentarios: this.comentarios,
      fecha: new Date().toISOString()
    };

    console.log('Evaluación enviada:', evaluacion);
    // Aquí puedes implementar el envío al servidor
    alert('¡Evaluación enviada con éxito!');
    
    // Resetear el formulario
    this.preguntas.forEach(p => p.respuesta = null);
    this.comentarios = '';
  }

  volverInicio() {
    this.router.navigate(['/dashboard']);
  }
}