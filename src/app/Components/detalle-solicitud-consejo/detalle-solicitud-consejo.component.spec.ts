import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudConsejoComponent } from './detalle-solicitud-consejo.component';

describe('DetalleSolicitudConsejoComponent', () => {
  let component: DetalleSolicitudConsejoComponent;
  let fixture: ComponentFixture<DetalleSolicitudConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudConsejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
