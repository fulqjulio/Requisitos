import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarCitacionesComponent } from './importar-citaciones.component';

describe('ImportarCitacionesComponent', () => {
  let component: ImportarCitacionesComponent;
  let fixture: ComponentFixture<ImportarCitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarCitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarCitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
