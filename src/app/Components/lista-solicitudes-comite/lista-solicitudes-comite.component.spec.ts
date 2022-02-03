import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesComiteComponent } from './lista-solicitudes-comite.component';

describe('ListaSolicitudesComiteComponent', () => {
  let component: ListaSolicitudesComiteComponent;
  let fixture: ComponentFixture<ListaSolicitudesComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
