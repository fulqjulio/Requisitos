import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsignaturasPendientesComponent } from './listado-asignaturas-pendientes.component';

describe('ListadoAsignaturasPendientesComponent', () => {
  let component: ListadoAsignaturasPendientesComponent;
  let fixture: ComponentFixture<ListadoAsignaturasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAsignaturasPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAsignaturasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
