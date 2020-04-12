import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Topic} from '../../models/topic';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [TopicService]
})
export class TopicsComponent implements OnInit {
  public page_title: string;
  public topics: Topic[];
  public totalPages;
  public page;
  public next_page;
  public prev_page;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _topicService: TopicService
  ) {
    this.page_title = 'Temas';
  }

  ngOnInit() {
    this.getTopics(1);
  }

  getTopics(page = 1){
    this._topicService.getTopics(page).subscribe(
      response => {
          if(response.topics){
            this.topics = response.topics;
          }else{
            this._router.navigate(['/inicio'])
          }
      },
      error => {
      console.log(error);
      }
    );
  }

}
