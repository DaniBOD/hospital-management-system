import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Box } from '../../models/box.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private readonly apiUrl = `${environment.apiUrl}/boxes`;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getBoxes(): Observable<Box[]> {
    return this.http.get<Box[]>(this.apiUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getBox(id: number): Observable<Box> {
    if (!id || id <= 0) {
      return throwError(() => new Error('ID de box inválido'));
    }
    return this.http.get<Box>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  crearBox(box: Box): Observable<Box> {
    if (!this.validarBox(box)) {
      return throwError(() => new Error('Datos del box incompletos o inválidos'));
    }
    return this.http.post<Box>(this.apiUrl, box, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editarBox(box: Box): Observable<Box> {
    if (!box.id || box.id <= 0 || !this.validarBox(box)) {
      return throwError(() => new Error('Datos del box inválidos para edición'));
    }
    return this.http.put<Box>(`${this.apiUrl}/${box.id}`, box, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  eliminarBox(id: number): Observable<void> {
    if (!id || id <= 0) {
      return throwError(() => new Error('ID de box inválido para eliminación'));
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
   );
  }

  private validarBox(box: Box): boolean {
  const horarioValido = box.horario && 
                       typeof box.horario.horaInicio === 'string' && 
                       box.horario.horaInicio.trim() !== '' &&
                       typeof box.horario.horaFin === 'string' && 
                       box.horario.horaFin.trim() !== '' &&
                       Array.isArray(box.horario.diasDisponibles) && 
                       box.horario.diasDisponibles.length > 0;

  return typeof box.nombre === 'string' && 
         box.nombre.trim() !== '' &&
         typeof box.piso === 'number' && 
         typeof box.disponible === 'boolean' &&
         horarioValido;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Error ${error.status}: ${error.message}`;
      if (error.error?.message) {
        errorMessage += ` - ${error.error.message}`;
      }
    }
    
    console.error('Error en BoxService:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}