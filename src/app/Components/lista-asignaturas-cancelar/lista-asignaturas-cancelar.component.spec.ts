import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignaturasCancelarComponent } from './lista-asignaturas-cancelar.component';

describe('ListaAsignaturasCancelarComponent', () => {
  let component: ListaAsignaturasCancelarComponent;
  let fixture: ComponentFixture<ListaAsignaturasCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAsignaturasCancelarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsignaturasCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
