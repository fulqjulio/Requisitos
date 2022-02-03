import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionGrupoInscribirComponent } from './seleccion-grupo-inscribir.component';

describe('SeleccionGrupoInscribirComponent', () => {
  let component: SeleccionGrupoInscribirComponent;
  let fixture: ComponentFixture<SeleccionGrupoInscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionGrupoInscribirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionGrupoInscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
