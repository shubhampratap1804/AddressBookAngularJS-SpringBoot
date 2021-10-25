import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public contactsDetails = [];
  public update: number;
  public existingUSer: User;

  constructor( private data: DataTransferService, private navigate: Router) {

  }


  ngOnInit(): void {
    this.data.getContacts()
    .subscribe(
      (value:any) => {
        this.contactsDetails = value.data;
      console.log(this.contactsDetails);
      }
    );
    this.data.getContacts().subscribe( data => console.log(data));
  }

  edit(value){
    this.update=value;
    this.navigate.navigate(['add', this.update]);
  }

  remove(contactId:number){
    this.data.deleteContact(contactId).subscribe(data=>console.log("delete successful"));  
    window.location.reload();
  }
}
