import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudComiteComponent } from './detalle-solicitud-comite.component';

describe('DetalleSolicitudComiteComponent', () => {
  let component: DetalleSolicitudComiteComponent;
  let fixture: ComponentFixture<DetalleSolicitudComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
