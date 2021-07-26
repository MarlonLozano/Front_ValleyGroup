import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employees:Array<any>=[]
  public charges:Array<any>=[]

  constructor(private apiService:ApiService,
              private routerService:Router) { }

  ngOnInit(): void {

    this.apiService.getEmployees().subscribe((resp:any)=>{
      console.log(resp)
      this.employees = resp
    });
  }

  editEmployee(id:string){
    this.routerService.navigate(['editar',id]);
  }

  newEmployee(){
    this.routerService.navigate(['nuevo']);
  }

  deleteEmployee(id:any){
    this.apiService.deleteEmployee(id).subscribe(resp =>{
      console.log('Empleado Eliminado')
      
    });
  }

}
