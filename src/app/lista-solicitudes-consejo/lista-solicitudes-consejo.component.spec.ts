import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesConsejoComponent } from './lista-solicitudes-consejo.component';

describe('ListaSolicitudesConsejoComponent', () => {
  let component: ListaSolicitudesConsejoComponent;
  let fixture: ComponentFixture<ListaSolicitudesConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesConsejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
