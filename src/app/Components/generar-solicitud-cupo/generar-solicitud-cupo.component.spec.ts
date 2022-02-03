import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarSolicitudCupoComponent } from './generar-solicitud-cupo.component';

describe('GenerarSolicitudCupoComponent', () => {
  let component: GenerarSolicitudCupoComponent;
  let fixture: ComponentFixture<GenerarSolicitudCupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarSolicitudCupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarSolicitudCupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
