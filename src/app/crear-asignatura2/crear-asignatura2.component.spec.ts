import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsignatura2Component } from './crear-asignatura2.component';

describe('CrearAsignatura2Component', () => {
  let component: CrearAsignatura2Component;
  let fixture: ComponentFixture<CrearAsignatura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAsignatura2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsignatura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
