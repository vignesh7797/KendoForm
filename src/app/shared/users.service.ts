import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { USER } from './userClass';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userData= new BehaviorSubject<any>([]);

  arr:any;

  constructor(private http: HttpClient) { 
    this.http.get('../../assets/userslist.json').subscribe(data => {
      console.log(data);
      this.arr = data;
      this.userData.next(data)
    });
  }

  getUsers(){
    return this.userData.asObservable();
  }

  addNewUser(data){
    this.arr.push(data);
    this.userData.next(this.arr);
  }
}
