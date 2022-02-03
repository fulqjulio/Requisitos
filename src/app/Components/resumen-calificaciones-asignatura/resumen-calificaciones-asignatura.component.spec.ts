import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCalificacionesAsignaturaComponent } from './resumen-calificaciones-asignatura.component';

describe('ResumenCalificacionesAsignaturaComponent', () => {
  let component: ResumenCalificacionesAsignaturaComponent;
  let fixture: ComponentFixture<ResumenCalificacionesAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenCalificacionesAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCalificacionesAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
