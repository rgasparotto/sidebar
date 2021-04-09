import { Component, OnInit } from '@angular/core';
import { IloginResult } from 'src/app/data/loginResult';
import { AuthService } from 'src/app/services/auth.service';
import {login} from '../../data/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string
  password: string
  constructor(private srv: AuthService) { }

  ngOnInit() {
  }

  async onLogin(){
    let lg: login;
    let logged: IloginResult;
    lg = new login();    
    lg.userName = this.username;
    lg.password = this.password;
    logged = await this.srv.log(lg);
  }
}
