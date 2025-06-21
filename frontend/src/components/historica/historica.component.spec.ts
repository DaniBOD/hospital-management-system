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
});
