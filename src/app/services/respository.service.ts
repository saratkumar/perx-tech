import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient) { }
  public getData = () => {
    return this.http.get(environment.urlAddress);
  }
  
 
}