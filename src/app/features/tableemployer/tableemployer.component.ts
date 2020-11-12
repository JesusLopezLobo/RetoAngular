import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-tableemployer',
  templateUrl: './tableemployer.component.html',
  styleUrls: ['./tableemployer.component.scss'],
})
export class TableemployerComponent implements OnInit {
  employerData: EmployerCustom[];
  constructor(private employers: EmployersService) {}

  ngOnInit(): void {
    this.getEmployers();
  }
  getEmployers(): void {
    this.employers.getEmployers().subscribe((res) => {
      this.employerData = res;
    });
  }
}
