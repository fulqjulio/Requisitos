import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirHorarioComponent } from './definir-horario.component';

describe('DefinirHorarioComponent', () => {
  let component: DefinirHorarioComponent;
  let fixture: ComponentFixture<DefinirHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinirHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
