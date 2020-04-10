import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { Topic} from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService} from '../../../services/topic.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, TopicService]
})
export class AddComponent implements OnInit {
  public page_title: string;
  public topic: Topic;
  public identity;
  public token;
  public status;
  constructor(
    private _route :ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicsService: TopicService
  ) {
    this.page_title = 'Crear nuevo Tema';
    this.identity = this._userService.getIdentity();
    this.topic = new Topic('','','','','','',this.identity._id,null);
  }

  ngOnInit() {
    console.log(this._topicsService.prueba());
  }

  onSubmit(form){
    console.log(form);
    console.log(this.topic);
  }
}
