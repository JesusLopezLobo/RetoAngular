import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-delete-employer',
  templateUrl: './delete-employer.component.html',
  styleUrls: ['./delete-employer.component.scss']
})
export class DeleteEmployerComponent implements OnInit {

  employerData: EmployerCustom;
  constructor(private employers: EmployersService, private route: ActivatedRoute) { }

  getEmployerId(id): void {
    this.employers.getEmployersId(id).subscribe((res) => {
      this.employerData = res[0];
      console.log(this.employerData);
    });
  }

  deleteEmployer(id): void {
    this.employers.deleteEmployee(id).subscribe( res => console.log(res));
  }

  ngOnInit(): void {
    //console.log(this.route.params);
    //console.log(this.route.params['id']);
    this.route.params.subscribe( params => {
      //console.log(params['id']);
      let id =+ params['id'];
      this.deleteEmployer(id);
      //his.getEmployerId(id);
    })
  }

}
