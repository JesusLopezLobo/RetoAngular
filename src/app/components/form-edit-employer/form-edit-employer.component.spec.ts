import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEmployerComponent } from './form-edit-employer.component';

describe('FormEditEmployerComponent', () => {
  let component: FormEditEmployerComponent;
  let fixture: ComponentFixture<FormEditEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
