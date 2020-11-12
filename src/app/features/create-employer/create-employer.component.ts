import { Component, OnInit } from '@angular/core';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-create-employer',
  templateUrl: './create-employer.component.html',
  styleUrls: ['./create-employer.component.scss']
})
export class CreateEmployerComponent implements OnInit {

  constructor(private employers: EmployersService) {}

  ngOnInit(): void {}
  getFormValue(values) {
    this.createEmployer(values);
  }

  createEmployer(values) {
    this.employers.createEmployee(values).subscribe((res) => {
      console.log('respuesta al crear empleado', res);
    });
  }


}
