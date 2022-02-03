import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporteCalificacionesComponent } from './importe-calificaciones.component';

describe('ImporteCalificacionesComponent', () => {
  let component: ImporteCalificacionesComponent;
  let fixture: ComponentFixture<ImporteCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporteCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporteCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
