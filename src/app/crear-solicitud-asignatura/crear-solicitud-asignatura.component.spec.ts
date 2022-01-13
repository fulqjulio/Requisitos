import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudAsignaturaComponent } from './crear-solicitud-asignatura.component';

describe('CrearSolicitudAsignaturaComponent', () => {
  let component: CrearSolicitudAsignaturaComponent;
  let fixture: ComponentFixture<CrearSolicitudAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
