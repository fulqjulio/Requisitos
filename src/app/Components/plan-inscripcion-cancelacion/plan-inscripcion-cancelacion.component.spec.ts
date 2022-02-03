import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanInscripcionCancelacionComponent } from './plan-inscripcion-cancelacion.component';

describe('PlanInscripcionCancelacionComponent', () => {
  let component: PlanInscripcionCancelacionComponent;
  let fixture: ComponentFixture<PlanInscripcionCancelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanInscripcionCancelacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanInscripcionCancelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
