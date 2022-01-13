import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoManualCalificacionesComponent } from './ingreso-manual-calificaciones.component';

describe('IngresoManualCalificacionesComponent', () => {
  let component: IngresoManualCalificacionesComponent;
  let fixture: ComponentFixture<IngresoManualCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoManualCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoManualCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
