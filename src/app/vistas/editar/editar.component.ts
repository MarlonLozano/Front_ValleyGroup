import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service'
import { EmployeeI } from '../../Models/employee.interface'
import { inject } from '@angular/core/testing';




@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute,
    private routerService: Router,
    private apiService: ApiService,
    ) { }
   
  editForm = new FormGroup({
    Name: new FormControl(''),
    Lastname: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl('')
  })

  ngOnInit(): void {

    let employeeId = this.activerouter.snapshot.paramMap.get('id');
    this.apiService.getEmployeeById(employeeId).subscribe(data => {
      this.editForm.setValue({
        
        // 'Name': this.employeeService.Name,
        // 'Lastname': this.employeeService.Lastname,
        // 'Email':this.employeeService.Email,
        // 'Phone': this.employeeService.Phone
      });
      console.log(this.editForm.value)
    })

  };


}
