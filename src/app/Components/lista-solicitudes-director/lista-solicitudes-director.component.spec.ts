import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesDirectorComponent } from './lista-solicitudes-director.component';

describe('ListaSolicitudesDirectorComponent', () => {
  let component: ListaSolicitudesDirectorComponent;
  let fixture: ComponentFixture<ListaSolicitudesDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
