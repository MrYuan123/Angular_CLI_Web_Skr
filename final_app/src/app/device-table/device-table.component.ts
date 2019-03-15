import { Component, OnInit } from '@angular/core';
import { Devices} from '../device_table';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent implements OnInit {

  devicesArr: Devices[];
  user = '1';
  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.getDevices();
  }
  getDevices(): void {
    this.statusService.getDevices(localStorage.getItem('_id')).subscribe( devices => this.devicesArr = devices);
  }

  deleteD(device: Devices): void {
    console.log('enter delete section' + device._id);
    // this.devicesArr = this.devicesArr.filter( d => d !== devices);
    this.statusService.deleteD(device._id).subscribe(
        res => {
            console.log('Delete successful');
            this.getDevices();
        },
        err => {
            console.log(err);
        }
    );
  }

}
