import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user';
import { global} from '../../services/global';
import { TopicService} from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService, TopicService]
})
export class ProfileComponent implements OnInit {

  public user: User;
  public topics: Topic[];
  public url: string;


  constructor(
    private _userService: UserService,
    private _topicsService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;

  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var userId = params['id'];
      this.getUser(userId);
      this.getTopics(userId);
    });

  }

  getUser(userId) {
    this._userService.getUser(userId).subscribe(
      response => {
          if (response.user) {
            this.user = response.user;
          } else {

          }
      },
      error => {
        console.log(error);
      }
    );

  }

  getTopics(userId){
    this._topicsService.getTopicsByUser(userId).subscribe(
      response => {
        if (response.topics) {
          this.topics = response.topics;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
