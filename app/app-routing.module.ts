import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './EmpList/EmpList.component';  
import { AddempComponent } from './add-emp/add-emp.component'; 


const routes: Routes = [
{ path: '', redirectTo: 'view-Employee', pathMatch: 'full' },  
  { path: 'view-Employee', component:  EmpListComponent},  
  { path: 'addemp', component:AddempComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
