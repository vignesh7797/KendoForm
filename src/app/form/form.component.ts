import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { NotificationService } from "@progress/kendo-angular-notification";
import { USER } from '../shared/userClass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  minDate = new Date(1900, 0, 1);
  maxDate= new Date();
  mask="000 000 0000";
  usersData:USER[];

  value;

  userInfo:FormGroup =  new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, Validators.required),
    email:new FormControl(null, [Validators.required, Validators.email]),
    phone:new FormControl(null,Validators.required),
    dob:new FormControl(this.maxDate, Validators.required),
    accept:new FormControl(null, Validators.required)
  });

  constructor(private userService:UsersService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{
      this.usersData = data;
    });
  }

  get f() {
    return this.userInfo.controls;
  }


  OnSubmit(){
    this.userInfo.markAllAsTouched();
    if(this.userInfo.valid){
      this.userInfo.value.id = this.usersData.length +1;
      console.log(this.userInfo.value);
      this.userService.addNewUser(this.userInfo.value);
      this.showSuccess();
      this.userInfo.reset();
    }else{
      this.showError();
    }
  }

  showSuccess(): void {
    this.notificationService.show({
      content: "Successfully add to Table..!",
      hideAfter: 1600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 1000 },
      type: { style: "success", icon: true },
    });
  }

  showError(): void {
    this.notificationService.show({
      content: "Something went wrong please Check..!",
      hideAfter: 1600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 1000 },
      type: { style: "error", icon: true },
    });
  }


}
