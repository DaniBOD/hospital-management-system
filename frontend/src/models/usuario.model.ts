export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  rol: 'ADMINISTRADOR' | 'RECEPCIONISTA';
}
