import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeLicoresComponent } from './informe-licores.component';

describe('InformeLicoresComponent', () => {
  let component: InformeLicoresComponent;
  let fixture: ComponentFixture<InformeLicoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeLicoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeLicoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
