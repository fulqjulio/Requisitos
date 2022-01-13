import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibreEleccionComponent } from './buscar-libre-eleccion.component';

describe('BuscarLibreEleccionComponent', () => {
  let component: BuscarLibreEleccionComponent;
  let fixture: ComponentFixture<BuscarLibreEleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLibreEleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLibreEleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
