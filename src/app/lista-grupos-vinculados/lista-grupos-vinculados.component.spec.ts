import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGruposVinculadosComponent } from './lista-grupos-vinculados.component';

describe('ListaGruposVinculadosComponent', () => {
  let component: ListaGruposVinculadosComponent;
  let fixture: ComponentFixture<ListaGruposVinculadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGruposVinculadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGruposVinculadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
