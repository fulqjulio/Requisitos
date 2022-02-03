import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignaturasDepartamentoComponent } from './lista-asignaturas-departamento.component';

describe('ListaAsignaturasDepartamentoComponent', () => {
  let component: ListaAsignaturasDepartamentoComponent;
  let fixture: ComponentFixture<ListaAsignaturasDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAsignaturasDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsignaturasDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
