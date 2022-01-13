import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudDirectorComponent } from './detalle-solicitud-director.component';

describe('DetalleSolicitudDirectorComponent', () => {
  let component: DetalleSolicitudDirectorComponent;
  let fixture: ComponentFixture<DetalleSolicitudDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
