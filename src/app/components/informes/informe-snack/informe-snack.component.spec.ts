import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeSnackComponent } from './informe-snack.component';

describe('InformeSnackComponent', () => {
  let component: InformeSnackComponent;
  let fixture: ComponentFixture<InformeSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
