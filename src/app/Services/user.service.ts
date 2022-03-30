import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:44371/api/users";

  GetAllUsers(){
    return this.http.get(this.baseUrl);
  }

  GetUserById(id){
    return this.http.get(this.baseUrl+"/"+id);
  }
}
