import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
// Material modules
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { fromEventPattern } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TablaEmpleadosComponent } from './components/tabla-empleados/tabla-empleados.component';
import {MatTableModule} from '@angular/material/table';
import { CreateEmployerComponent } from './features/create-employer/create-employer.component';
import { TableemployerComponent } from './features/tableemployer/tableemployer.component';
import { FormCreateEmployerComponent } from './components/form-create-employer/form-create-employer.component';
import { EditEmployerComponent } from './features/edit-employer/edit-employer.component';
import { FormEditEmployerComponent } from './components/form-edit-employer/form-edit-employer.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteEmployerComponent } from './features/delete-employer/delete-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaEmpleadosComponent,
    CreateEmployerComponent,
    TableemployerComponent,
    FormCreateEmployerComponent,
    EditEmployerComponent,
    FormEditEmployerComponent,
    HomeComponent,
    DeleteEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
