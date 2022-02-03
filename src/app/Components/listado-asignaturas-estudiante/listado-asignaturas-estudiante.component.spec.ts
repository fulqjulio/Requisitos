import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsignaturasEstudianteComponent } from './listado-asignaturas-estudiante.component';

describe('ListadoAsignaturasEstudianteComponent', () => {
  let component: ListadoAsignaturasEstudianteComponent;
  let fixture: ComponentFixture<ListadoAsignaturasEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAsignaturasEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAsignaturasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
