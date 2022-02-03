import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarImporteCalificacionesComponent } from './confirmar-importe-calificaciones.component';

describe('ConfirmarImporteCalificacionesComponent', () => {
  let component: ConfirmarImporteCalificacionesComponent;
  let fixture: ComponentFixture<ConfirmarImporteCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarImporteCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarImporteCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
