import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignaturasSolicitudCupoComponent } from './lista-asignaturas-solicitud-cupo.component';

describe('ListaAsignaturasSolicitudCupoComponent', () => {
  let component: ListaAsignaturasSolicitudCupoComponent;
  let fixture: ComponentFixture<ListaAsignaturasSolicitudCupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAsignaturasSolicitudCupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsignaturasSolicitudCupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
