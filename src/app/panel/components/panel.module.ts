import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PanelRoutingModule } from './panel-routing.module';
import { MomentModule } from 'angular2-moment';

import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

import { UserService } from '../../services/user.service';
import { UserGuard } from '../../services/user.guard';

@NgModule({
  declarations:[
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    PanelRoutingModule,
    MomentModule
  ],
  exports:[
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  providers: [
    UserService,
    UserGuard
  ]
})

export class PanelModule {}
