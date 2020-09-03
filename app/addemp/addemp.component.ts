import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Employee } from '../employee';  

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private employeeservice:EmployeeService) { }
  employee : Employee=new Employee();  
  submitted = false;  

  ngOnInit(): void {
    this.submitted=false; 
  }
  employeesaveform=new FormGroup({  
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    branch:new FormControl()  
  }); 
  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.name=this.Name.value;  
    this.employee.email=this.Email.value;  
    this.employee.phone=this.Phone.value; 
    this.submitted = true;  
    this.save();  
  }
  save() {  
    this.employeeservice.createEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  
  
  get Name(){  
    return this.employeesaveform.get('name');  
  }  
  
  get Email(){  
    return this.employeesaveform.get('email');  
  }  
  
  get Phone(){  
    return this.employeesaveform.get('phone');  
  }  
  addEmployeeForm(){  
    this.submitted=false;  
    this.employeesaveform.reset();  
  }  

}
