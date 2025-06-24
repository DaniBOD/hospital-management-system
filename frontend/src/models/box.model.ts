import { Especialista } from './especialista.model';

export interface Box {
  id?: number;
  nombre: string;
  piso: number;
  disponible: boolean;
  horario: {
    horaInicio: string;
    horaFin: string;
    diasDisponibles: string[];
  };
  especialista?: Especialista;
}