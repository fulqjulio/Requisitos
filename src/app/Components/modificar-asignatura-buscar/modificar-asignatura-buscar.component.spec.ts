import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAsignaturaBuscarComponent } from './modificar-asignatura-buscar.component';

describe('ModificarAsignaturaBuscarComponent', () => {
  let component: ModificarAsignaturaBuscarComponent;
  let fixture: ComponentFixture<ModificarAsignaturaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAsignaturaBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAsignaturaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
