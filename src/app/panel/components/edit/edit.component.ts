import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { Topic} from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService} from '../../../services/topic.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, TopicService]
})
export class EditComponent implements OnInit {

  public page_title: string;
  public topic: Topic;
  public identity;
  public token;
  public status;
  public is_edit;
  constructor(
    private _route :ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicsService: TopicService
  ) {
    this.page_title = 'Editar Tema';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topic = new Topic('','','','','','',this.identity._id,null);
    this.is_edit = true;
  }

  ngOnInit() {
    this.getTopic();
  }

  getTopic(){
    this._route.params.subscribe(params => {
        const id = params['id'];
        this._topicsService.getTopic(id).subscribe(
          response => {
              if (!response.topic){
                this._router.navigate(['/panel']);
              } else {
                this.topic = response.topic;
              }
          },
          error => {
            console.log(error);
          }
        );
      });
  }

  onSubmit(form){
    const id = this.topic._id;
    this._topicsService.update(this.token, id, this.topic).subscribe(
      response => {
        if (response.topicUpdate) {
          this.topic = response.topicUpdate;
          this.status = 'success';
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
