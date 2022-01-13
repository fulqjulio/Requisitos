import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSolicitudAsignaturaComponent } from './modificar-solicitud-asignatura.component';

describe('ModificarSolicitudAsignaturaComponent', () => {
  let component: ModificarSolicitudAsignaturaComponent;
  let fixture: ComponentFixture<ModificarSolicitudAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSolicitudAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSolicitudAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
