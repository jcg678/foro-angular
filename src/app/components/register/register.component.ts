import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;


  constructor() {
    this.page_title = "Registrate";
    this.user = new User('','','','','','','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.user);

  }
}
