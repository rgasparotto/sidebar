import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login } from '../data/login';
import { IloginResult } from '../data/loginResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: boolean;
  url: string = 'http://localhost:5000/ws';
  constructor(private http: HttpClient) { 
    this.logged = true;
  }

  isLogged(): boolean{
    return this.logged;
  }

  async log(credentials: login): Promise<IloginResult>{    
    let ret = await  this.http.post<IloginResult>(this.url + '/userLogin', credentials).toPromise();
    return ret;
  }

}
