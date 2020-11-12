import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-form-edit-employer',
  templateUrl: './form-edit-employer.component.html',
  styleUrls: ['./form-edit-employer.component.scss']
})
export class FormEditEmployerComponent implements OnInit {

  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup;
  public employer: EmployerCustom;
  constructor(private formBuilder: FormBuilder, private employers: EmployersService) {}

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
