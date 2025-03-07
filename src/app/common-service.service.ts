import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroinment } from '../enviroinments/enviroinment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  API = enviroinment.apiURL;
  constructor(private http:HttpClient) { }

  public getmenus():Observable<any>{
    return this.http.get<any>(this.API+"cmnserv/user_modules",{headers:{ 'content-type': 'application/json' }});
  }

}
