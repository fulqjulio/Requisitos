import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignaturaDepartamentoComponent } from './detalle-asignatura-departamento.component';

describe('DetalleAsignaturaDepartamentoComponent', () => {
  let component: DetalleAsignaturaDepartamentoComponent;
  let fixture: ComponentFixture<DetalleAsignaturaDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
