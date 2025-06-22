import { Component } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent {
  preguntas = [
    {
      texto: '¿Cómo calificaría el conocimiento del profesor?',
      opcion: ['Muy bueno', 'Bueno', 'Regular', 'Malo', 'Muy malo'],
      respuesta: ''
    },
    {
      texto: '¿Cómo calificaría la claridad en la explicación de los temas?',
      opcion: ['Muy clara', 'Clara', 'Regular', 'Confusa', 'Muy confusa'],
      respuesta: ''
    }
  ];

  submitForm() {
    console.log('Respuestas enviadas:', this.preguntas);
    // Aquí puedes agregar código para enviar las respuestas a un servidor, etc.
  }
}