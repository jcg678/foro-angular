import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { Topic} from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService} from '../../../services/topic.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent implements OnInit {
  public page_title: string;
  public topics: Array<Topic>;
  public identity;
  public token;
  public status;
  constructor(
    private _route :ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicsService: TopicService
  ) {
    this.page_title = 'Mis Temas';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    //this.topics = new Topic('','','','','','',this.identity._id,null);
  }

  ngOnInit() {
  }

}
