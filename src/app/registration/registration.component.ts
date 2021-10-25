import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor( private data: DataTransferService, 
              private navigate: Router,
              private formBuilder: FormBuilder) { }

              public validatePassword: boolean = false;

              registration = this.formBuilder.group({
                userName:[''],
                email:[''],
                confirmEmail:[''],
                password:[''],
                confirmPassword:[''],
              });
  ngOnInit(): void {
  }

  onRegister(){
    if(this.registration.value.email == this.registration.value.confirmEmail &&
      this.registration.value.password == this.registration.value.confirmPassword){
        this.data.registrationDetails(this.registration.value).subscribe( data => console.log(
          "Registration Data Sent!"));
          this.navigate.navigate(['login']);
      } else {
        this.validatePassword = true;
      }
  }

}
