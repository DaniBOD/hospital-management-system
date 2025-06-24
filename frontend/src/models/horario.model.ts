export interface Horario {
  horaInicio: string; // formato HH:mm
  horaFin: string;
  diasDisponibles: string[]; // ['MONDAY', 'TUESDAY', ...]
}
