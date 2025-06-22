import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricaComponent } from './historica.component';

describe('HistoricaComponent', () => {
  let component: HistoricaComponent;
  let fixture: ComponentFixture<HistoricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter schedules by doctor', () => {
    component.selectedDoctorId = '1';
    component.applyFilters();
    expect(component.filteredSchedules.every(s => s.doctorId === '1')).toBeTrue();
  });

  it('should filter schedules by day', () => {
    component.selectedDay = 'Lunes';
    component.applyFilters();
    expect(component.filteredSchedules.every(s => s.day === 'Lunes')).toBeTrue();
  });
});