import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeProveedorComponent } from './informe-proveedor.component';

describe('InformeProveedorComponent', () => {
  let component: InformeProveedorComponent;
  let fixture: ComponentFixture<InformeProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
