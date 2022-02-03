import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSolicitudDirectorComponent } from './modificar-solicitud-director.component';

describe('ModificarSolicitudDirectorComponent', () => {
  let component: ModificarSolicitudDirectorComponent;
  let fixture: ComponentFixture<ModificarSolicitudDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSolicitudDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSolicitudDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
