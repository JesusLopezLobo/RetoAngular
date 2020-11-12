import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployerCustom } from 'src/app/core/models/employer.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.scss']
})
export class TablaEmpleadosComponent implements OnInit {

  @Input() employerData: EmployerCustom[] = [];
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'employeeSalary',
    'employeeAge',
    'modificar',
    'delete'
  ];
  dataSource: MatTableDataSource<EmployerCustom>;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.employerData);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
