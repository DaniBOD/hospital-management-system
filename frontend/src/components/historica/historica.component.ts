import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historica',
  templateUrl: './historica.component.html',
  styleUrls: ['./historica.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HistoricaComponent {
  selectedProfessorId: string | null = null;
  selectedYear: string = '';
  selectedSemester: string = ''; // <-- Nuevo filtro

  professors = [
    { id: '1', name: 'Rafaela Fuentes', avatar: 'assets/images/avatars/1.jpg' },
    { id: '2', name: 'Tomás Acevedo', avatar: 'assets/images/avatars/2.jpg' },
    { id: '3', name: 'Gustavo Mondaca', avatar: 'assets/images/avatars/3.jpg' },
    { id: '4', name: 'Fabiola Alvarado', avatar: 'assets/images/avatars/4.jpg' },
    { id: '5', name: ' Agatha Ruiz', avatar: 'assets/images/avatars/5.jpg' },
    { id: '6', name: 'Dávid Bisbal', avatar: 'assets/images/avatars/6.jpg' }
  ];

  years: string[] = [];

  allEvaluations = [
    {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2023',
      semester: 'S1', // <-- Nuevo campo
      average: 6.2,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 5.5},
        { name: 'Disponibilidad', score: 6.7 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Excelente dominio del tema, aunque a veces va muy rápido en las explicaciones.'
    }, 
   {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2023',
      semester: 'S2', // <-- Nuevo campo
      average: 6.2,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 5.5},
        { name: 'Disponibilidad', score: 6.7 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Excelente dominio del tema, aunque a veces va muy rápido en las explicaciones.'
    },
    {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2022',
      semester: 'S1', // <-- Nuevo campo
      average: 4.5,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 4.5},
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 4.2 }
      ],
      comments: 'Escaso dominio del tema, va muy rápido en las explicaciones.'
    },
    {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2022',
      semester: 'S2', // <-- Nuevo campo
      average: 4.0,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 4.5},
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 4.2 }
      ],
      comments: 'Escaso dominio del tema, va muy rápido en las explicaciones.'
    },
     {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2024',
      semester: 'S1',
      average: 6.5,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 6.5},
        { name: 'Disponibilidad', score: 6.7 },
        { name: 'Materiales', score: 6.3 }
      ],
      comments: 'Planteamiento de actividades muy interesantes.'
    },
     {
      id: '1',
      professorId: '1',
      course: 'Ingles III',
      year: '2024',
      semester: 'S2',
      average: 6.5,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 6.5},
        { name: 'Disponibilidad', score: 6.7 },
        { name: 'Materiales', score: 6.3 }
      ],
      comments: 'Planteamiento de actividades muy interesantes.'
    },
    {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2022',
      semester: 'S1',
      average: 5.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 5.7 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Muy buen profesor, pero podría mejorar la claridad.'
    },
    {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2022',
      semester: 'S2',
      average: 5.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 5.7 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Muy buen profesor, pero podría mejorar la claridad.'
    },
   {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2023',
      semester: 'S1',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: ' Podría mejorar la claridad.'
    },
       {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2023',
      semester: 'S2',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: ' Podría mejorar la claridad.'
    },
   {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2024',
      semester: 'S1',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: ' Podría mejorar la claridad.'
    },
   {
      id: '2',
      professorId: '2',
      course: 'Paradigmas de la programación',
      year: '2024',
      semester: 'S2',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: ' Podría mejorar la claridad.'
    },
    {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2024',
      semester: 'S1',
      average: 5.9,
      metrics: [
        { name: 'Conocimiento', score: 5.7 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 6.0 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Explica bien, pero a veces falta material de apoyo.'
    },
    {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2024',
      semester: 'S2',
      average: 5.9,
      metrics: [
        { name: 'Conocimiento', score: 5.7 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 6.0 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Explica bien, pero a veces falta material de apoyo.'
    },
    {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2023',
      semester: 'S1',
      average: 5.4,
      metrics: [
        { name: 'Conocimiento', score: 5.3 },
        { name: 'Claridad', score: 5.5 },
        { name: 'Disponibilidad', score: 5.5 },
        { name: 'Materiales', score: 5.3 }
      ],
      comments: 'Explica bien.'
    },
    {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2023',
      semester: 'S2',
      average: 5.4,
      metrics: [
        { name: 'Conocimiento', score: 5.3 },
        { name: 'Claridad', score: 5.5 },
        { name: 'Disponibilidad', score: 5.5 },
        { name: 'Materiales', score: 5.3 }
      ],
      comments: 'Explica bien.'
    },
   {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2022',
      semester: 'S1',
      average: 5.0,
      metrics: [
        { name: 'Conocimiento', score: 5.0 },
        { name: 'Claridad', score: 4.3 },
        { name: 'Disponibilidad', score: 4.5 },
        { name: 'Materiales', score: 5.3 }
      ],
      comments: 'Deberia tomar en cuenta que no todos los alumnos tienen el mismo nivel de conocimiento previo.'
    },
   {
      id: '3',
      professorId: '3',
      course: 'Electricidad y Magnetismo',
      year: '2022',
      semester: 'S2',
      average: 5.0,
      metrics: [
        { name: 'Conocimiento', score: 5.0 },
        { name: 'Claridad', score: 4.3 },
        { name: 'Disponibilidad', score: 4.5 },
        { name: 'Materiales', score: 5.3 }
      ],
      comments: 'Deberia tomar en cuenta que no todos los alumnos tienen el mismo nivel de conocimiento previo.'
    },
    {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2022',
      semester: 'S1',
      average: 6.9,
      metrics: [
        { name: 'Conocimiento', score: 6.9 },
        { name: 'Claridad', score: 7.0 },
        { name: 'Disponibilidad', score: 6.8 },
        { name: 'Materiales', score: 7.0 }
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
      {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2022',
      semester: 'S2',
      average: 6.9,
      metrics: [
        { name: 'Conocimiento', score: 6.9 },
        { name: 'Claridad', score: 7.0 },
        { name: 'Disponibilidad', score: 6.8 },
        { name: 'Materiales', score: 7.0 }
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
    {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2023',
      semester: 'S1',
      average: 6.4,
      metrics: [
        { name: 'Conocimiento', score: 6.4 },
        { name: 'Claridad', score: 6.0 },
        { name: 'Disponibilidad', score: 6.5 },
        { name: 'Materiales', score: 6.7}
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
    {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2023',
      semester: 'S2',
      average: 6.4,
      metrics: [
        { name: 'Conocimiento', score: 6.4 },
        { name: 'Claridad', score: 6.0 },
        { name: 'Disponibilidad', score: 6.5 },
        { name: 'Materiales', score: 6.7}
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
    {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2024',
      semester: 'S1',
      average: 6.6,
      metrics: [
        { name: 'Conocimiento', score: 6.6 },
        { name: 'Claridad', score: 6.6 },
        { name: 'Disponibilidad', score: 6.8 },
        { name: 'Materiales', score: 6.3}
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
    {
      id: '4',
      professorId: '4',
      course: 'Base de datos',
      year: '2024',
      semester: 'S2',
      average: 6.6,
      metrics: [
        { name: 'Conocimiento', score: 6.6 },
        { name: 'Claridad', score: 6.6 },
        { name: 'Disponibilidad', score: 6.8 },
        { name: 'Materiales', score: 6.3}
      ],
      comments: 'Muy dedicada y clara en sus explicaciones.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2024',
      semester: 'S1',
      average: 2.8,
      metrics: [
        { name: 'Conocimiento', score: 2.5 },
        { name: 'Claridad', score: 2.8 },
        { name: 'Disponibilidad', score: 2.7 },
        { name: 'Materiales', score: 3.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2024',
      semester: 'S2',
      average: 2.8,
      metrics: [
        { name: 'Conocimiento', score: 2.5 },
        { name: 'Claridad', score: 2.8 },
        { name: 'Disponibilidad', score: 2.7 },
        { name: 'Materiales', score: 3.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2023',
      semester: 'S1',
      average: 3.8,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 3.8 },
        { name: 'Disponibilidad', score: 3.7 },
        { name: 'Materiales', score: 3.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2023',
      semester: 'S2',
      average: 3.8,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 3.8 },
        { name: 'Disponibilidad', score: 3.7 },
        { name: 'Materiales', score: 3.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2022',
      semester: 'S1',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '5',
      professorId: '5',
      course: 'Calculo III',
      year: '2022',
      semester: 'S2',
      average: 4.8,
      metrics: [
        { name: 'Conocimiento', score: 4.5 },
        { name: 'Claridad', score: 4.8 },
        { name: 'Disponibilidad', score: 4.7 },
        { name: 'Materiales', score: 5.0 }
      ],
      comments: 'Podría mejorar la disponibilidad para consultas.'
    },
    {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2022',
      semester: 'S1',
      average: 3.4,
      metrics: [
        { name: 'Conocimiento', score: 3.5 },
        { name: 'Claridad', score: 2.8 },
        { name: 'Disponibilidad', score: 3.5 },
        { name: 'Materiales', score: 4.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    },  
    {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2022',
      semester: 'S2',
      average: 3.4,
      metrics: [
        { name: 'Conocimiento', score: 3.5 },
        { name: 'Claridad', score: 2.8 },
        { name: 'Disponibilidad', score: 3.5 },
        { name: 'Materiales', score: 4.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    }, 
    {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2023',
      semester: 'S1',
      average: 5.4,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 4.5 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    },  
    {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2023',
      semester: 'S2',
      average: 5.4,
      metrics: [
        { name: 'Conocimiento', score: 5.5 },
        { name: 'Claridad', score: 5.8 },
        { name: 'Disponibilidad', score: 4.5 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    }, 
   {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2024',
      semester: 'S1',
      average: 6.4,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 6.8 },
        { name: 'Disponibilidad', score: 5.5 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    },
       {
      id: '6',
      professorId: '6',
      course: 'Estructura y algoritmos',
      year: '2024',
      semester: 'S2',
      average: 6.4,
      metrics: [
        { name: 'Conocimiento', score: 6.5 },
        { name: 'Claridad', score: 6.8 },
        { name: 'Disponibilidad', score: 5.5 },
        { name: 'Materiales', score: 6.0 }
      ],
      comments: 'Le falta experiencia, pero es amable.'
    }

  ];

  filteredEvaluations: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.selectedProfessorId = params['profesorId'] || null;
      this.applyFilters();
    });
  }

  ngOnInit() {
    // Extrae los años únicos de las evaluaciones
    this.years = Array.from(new Set(this.allEvaluations.map(e => e.year)));
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEvaluations = this.allEvaluations
      .filter(evaluation => {
        const professorMatch = !this.selectedProfessorId || evaluation.professorId === this.selectedProfessorId;
        const yearMatch = !this.selectedYear || evaluation.year === this.selectedYear;
        const semesterMatch = !this.selectedSemester || evaluation.semester === this.selectedSemester; // <-- Nuevo filtro
        return professorMatch && yearMatch && semesterMatch;
      })
      .map(evaluation => {
        const professor = this.professors.find(p => p.id === evaluation.professorId);
        return {
          ...evaluation,
          professor
        };
      });
  }
}