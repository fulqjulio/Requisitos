import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCalificacionesComponent } from './ingresar-calificaciones.component';

describe('IngresarCalificacionesComponent', () => {
  let component: IngresarCalificacionesComponent;
  let fixture: ComponentFixture<IngresarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
