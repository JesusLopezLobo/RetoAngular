import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableemployerComponent } from './tableemployer.component';

describe('TableemployerComponent', () => {
  let component: TableemployerComponent;
  let fixture: ComponentFixture<TableemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
