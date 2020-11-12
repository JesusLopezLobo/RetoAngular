import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-employer',
  templateUrl: './form-create-employer.component.html',
  styleUrls: ['./form-create-employer.component.scss']
})
export class FormCreateEmployerComponent implements OnInit {

  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formOwner = this.formBuilder.group({
      name: [],
      salary: [],
      age: [],
    });
  }

  submit() {
    this.formValue.emit(this.formOwner.value);
  }


}
