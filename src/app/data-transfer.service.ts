import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './registration';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private url:string='http://localhost:8080/service';

  constructor(private httpClient: HttpClient) { }

getContacts(): Observable<User[]>{
  return this.httpClient.get<User[]>(this.url);
}

addContact(user: User) : Observable<User[]>{
return this.httpClient.post<User[]>(this.url+"/create", user);
}

deleteContact(id: number): Observable<User[]>{
  return this.httpClient.delete<User[]>(`${this.url+"/delete"}/${id}`);
}

getContactById(id: number): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.url+"/get"}/${id}`);
} 

updateContactById(user: User, id: number): Observable<User[]>{
  return this.httpClient.put<User[]>(`${this.url+"/update"}/${id}`, user);
}

registrationDetails(data: any): Observable<Registration[]>{
  return this.httpClient.post<Registration[]>(this.url+"/logins", data);
}

getLogins(data: any): Observable<Registration[]>{
  return this.httpClient.post<Registration[]>(this.url+"/getlogins", data);
}
}