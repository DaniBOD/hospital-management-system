import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './historica.component.html',
  styleUrls: ['./historica.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HistoricaComponent {
  selectedDoctorId: string | null = null;
  selectedDay: string = '';

  doctors = [
    { id: '1', name: 'Dra. María Rodríguez', specialty: 'Cardiología', avatar: 'assets/images/doctors/1.jpg' },
    { id: '2', name: 'Dr. Carlos Méndez', specialty: 'Pediatría', avatar: 'assets/images/doctors/2.jpg' },
    { id: '3', name: 'Dra. Laura Sánchez', specialty: 'Dermatología', avatar: 'assets/images/doctors/3.jpg' },
    { id: '4', name: 'Dr. Javier López', specialty: 'Ortopedia', avatar: 'assets/images/doctors/4.jpg' },
    { id: '5', name: 'Dra. Ana Fernández', specialty: 'Ginecología', avatar: 'assets/images/doctors/5.jpg' }
  ];

  days: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  allSchedules = [
    {
      id: '1',
      doctorId: '1',
      day: 'Lunes',
      startTime: '08:00',
      endTime: '12:00',
      room: 'Consultorio 101',
      status: 'Disponible'
    },
    {
      id: '2',
      doctorId: '1',
      day: 'Miércoles',
      startTime: '14:00',
      endTime: '18:00',
      room: 'Consultorio 101',
      status: 'Disponible'
    },
    {
      id: '3',
      doctorId: '2',
      day: 'Martes',
      startTime: '09:00',
      endTime: '13:00',
      room: 'Consultorio 205',
      status: 'Disponible'
    },
    {
      id: '4',
      doctorId: '2',
      day: 'Jueves',
      startTime: '15:00',
      endTime: '19:00',
      room: 'Consultorio 205',
      status: 'No disponible'
    },
    {
      id: '5',
      doctorId: '3',
      day: 'Lunes',
      startTime: '10:00',
      endTime: '14:00',
      room: 'Consultorio 302',
      status: 'Disponible'
    },
    {
      id: '6',
      doctorId: '3',
      day: 'Viernes',
      startTime: '08:00',
      endTime: '12:00',
      room: 'Consultorio 302',
      status: 'Disponible'
    },
    {
      id: '7',
      doctorId: '4',
      day: 'Miércoles',
      startTime: '07:00',
      endTime: '11:00',
      room: 'Consultorio 410',
      status: 'No disponible'
    },
    {
      id: '8',
      doctorId: '4',
      day: 'Sábado',
      startTime: '09:00',
      endTime: '13:00',
      room: 'Consultorio 410',
      status: 'Disponible'
    },
    {
      id: '9',
      doctorId: '5',
      day: 'Martes',
      startTime: '12:00',
      endTime: '16:00',
      room: 'Consultorio 512',
      status: 'Disponible'
    },
    {
      id: '10',
      doctorId: '5',
      day: 'Jueves',
      startTime: '08:00',
      endTime: '12:00',
      room: 'Consultorio 512',
      status: 'Disponible'
    }
  ];

  filteredSchedules: any[] = [];

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredSchedules = this.allSchedules
      .filter(schedule => {
        const doctorMatch = !this.selectedDoctorId || schedule.doctorId === this.selectedDoctorId;
        const dayMatch = !this.selectedDay || schedule.day === this.selectedDay;
        return doctorMatch && dayMatch;
      })
      .map(schedule => {
        const doctor = this.doctors.find(d => d.id === schedule.doctorId);
        return {
          ...schedule,
          doctor
        };
      });
  }

  bookAppointment(schedule: any) {
    // Lógica para reservar cita
    console.log('Cita reservada con:', schedule.doctor.name);
    alert(`Cita reservada con ${schedule.doctor.name} el ${schedule.day} a las ${schedule.startTime}`);
  }
}