import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public flag: boolean =false;
  loginData;

  constructor( private data: DataTransferService, 
              private navigate: Router, 
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  loginDetails = this.formBuilder.group({
    userName: [''],
    password: [''],
  });

  onLogin(){
    this.data.getLogins(this.loginDetails.value).subscribe((getData: any) => {
      if(getData.message == '200'){
        this.flag = true;
      }
    });
    if (this.flag == true){
      this.navigate.navigate(['home']);
    } else {
      alert ('Username or password not matched!');
    }
  }
}
