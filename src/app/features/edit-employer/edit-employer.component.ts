import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.scss']
})
export class EditEmployerComponent implements OnInit {
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  employerData: EmployerCustom;
  formOwner: FormGroup;

  constructor(private employers: EmployersService,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  //ngOnInit(): void {
    //this.getEmployerId();
  //}
  getEmployerId(id): void {
    this.employers.getEmployersId(id).subscribe((res) => {
      this.employerData = res[0];
      console.log(this.employerData);
    });
  }

  ngOnInit(): void {
    this.initForm();
    //console.log(this.route.params);
    //console.log(this.route.params['id']);
    this.route.params.subscribe( params => {
      //console.log(params['id']);
      let id =+ params['id'];
      this.getEmployerId(id);
    })
  }

  initForm() {
    this.formOwner = this.formBuilder.group({
      name: [],
      salary: [],
      age: [],
    });
  }

  submit() {
    this.employers.updateEmployee(this.employerData).subscribe( res => console.log(res));
  }

}
