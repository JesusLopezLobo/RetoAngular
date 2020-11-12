import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEmployerComponent } from './form-create-employer.component';

describe('FormCreateEmployerComponent', () => {
  let component: FormCreateEmployerComponent;
  let fixture: ComponentFixture<FormCreateEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
