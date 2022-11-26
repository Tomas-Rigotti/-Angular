import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCarritoComponent } from './formulario-carrito.component';

describe('FormularioCarritoComponent', () => {
  let component: FormularioCarritoComponent;
  let fixture: ComponentFixture<FormularioCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
