import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoActividadComponent } from './ingreso-actividad.component';

describe('IngresoActividadComponent', () => {
  let component: IngresoActividadComponent;
  let fixture: ComponentFixture<IngresoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
