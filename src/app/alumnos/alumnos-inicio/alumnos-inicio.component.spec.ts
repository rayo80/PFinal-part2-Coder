import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosInicioComponent } from './alumnos-inicio.component';

describe('AlumnosInicioComponent', () => {
  let component: AlumnosInicioComponent;
  let fixture: ComponentFixture<AlumnosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
