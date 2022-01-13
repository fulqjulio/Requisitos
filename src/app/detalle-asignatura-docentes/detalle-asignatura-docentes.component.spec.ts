import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignaturaDocentesComponent } from './detalle-asignatura-docentes.component';

describe('DetalleAsignaturaDocentesComponent', () => {
  let component: DetalleAsignaturaDocentesComponent;
  let fixture: ComponentFixture<DetalleAsignaturaDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaDocentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
