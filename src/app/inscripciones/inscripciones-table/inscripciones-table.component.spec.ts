import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesTableComponent } from './inscripciones-table.component';

describe('InscripcionesTableComponent', () => {
  let component: InscripcionesTableComponent;
  let fixture: ComponentFixture<InscripcionesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
