import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarImporteCitacionesComponent } from './confirmar-importe-citaciones.component';

describe('ConfirmarImporteCitacionesComponent', () => {
  let component: ConfirmarImporteCitacionesComponent;
  let fixture: ComponentFixture<ConfirmarImporteCitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarImporteCitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarImporteCitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
