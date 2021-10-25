import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { User } from '../user';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent implements OnInit {

public getId;
contacts;
public value: any;


  constructor(private data: DataTransferService, private router: ActivatedRoute,
    private navigate: Router) { }

  ngOnInit(): void {
    this.getId = this.router.snapshot.paramMap.get("id");
    console.log(this.getId);
    this.contacts = new User();
    this.data.getContactById(this.getId).subscribe(
      (getData:any) => 
      {
        this.value=getData.contacts;
        this.contacts.firstName=this.value.firstName;
        this.contacts.lastName=this.value.lastName;
        this.contacts.address=this.value.address;
        this.contacts.city=this.value.city;
        this.contacts.state=this.value.state;
        this.contacts.zip=this.value.zip;
        this.contacts.phoneNumber=this.value.phoneNumber;
        this.contacts.email=this.value.email;
      }
      );
  }

  onSubmit(){
    console.log(this.contacts);
    this.data.addContact(this.contacts).subscribe(contacts => console.log("Successful!"));
    this.navigate.navigate(['home']);
  }

  update(){
    this.data.updateContactById(this.contacts,this.getId).subscribe(contacts=>console.log("data update successful"));
    this.navigate.navigate(['home']);
  }
}
