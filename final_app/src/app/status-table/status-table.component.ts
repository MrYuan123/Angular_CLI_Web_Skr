import { Component, OnInit } from '@angular/core';
import { Status} from '../status';
import { StatusService } from '../status.service';
import {HttpClient} from '@angular/common/http';

import { timer, interval} from 'rxjs';


@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {

  statusArr: Status[];
  constructor( private statusService: StatusService) { }

  ngOnInit() {
     this.getStatus();
  }

  getStatus(): void {
      this.statusService.getStatus().subscribe(status => this.statusArr = status);
      console.log('ok, finish!');
  }
}
