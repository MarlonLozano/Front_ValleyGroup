import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{EmployeeI} from '../../Models/employee.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url = 'http://127.0.0.1:8000/api/employees'
  constructor(
    private http:HttpClient
  ) { }

  getEmployees(){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')

      return this.http.get(this._url,{
        headers: header
      } );
   }

  //  getEmployeesById(id:any){
  //   let header = new HttpHeaders()
  //     .set('Type-content','aplication/json')

  //     return this.http.get(this._url + "/" +id,{
  //       headers: header
  //     } );
  //   }

  getEmployeeById(id:any):Observable<EmployeeI>{
    let url = this._url + '/'+ id;
    return this.http.get<EmployeeI>(url);
  }

  deleteEmployee(id:any){
    let url = this._url + '/'+ id;
    return this.http.delete(url);
  }
}

