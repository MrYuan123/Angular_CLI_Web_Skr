import { Component } from '@angular/core';
import {User} from './user';
import { Status} from './status';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Remote Device Management System';
}
