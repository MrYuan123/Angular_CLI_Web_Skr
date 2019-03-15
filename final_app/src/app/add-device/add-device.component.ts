import { Component, OnInit, Input } from '@angular/core';
import { StatusService} from '../status.service';
import { Devices } from '../device_table';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  @Input() inputId = '';
  @Input() inputName = '';
  @Input() inputLocation = '';
  @Input() inputKind = '';
  devicesArr: Devices[];
// formSelect;
// @Select() formSelect='';
  constructor(private  statusServices: StatusService) { }

  ngOnInit() {
      this.getDevices();
  }
    getDevices(): void {
        // this.statusServices.getDevices().subscribe(devices => this.devicesArr = devices);
    }
    submit(id: string, name: string, deviceType: string, location: string): void {

        if (this.inputId === '') {
            alert('InputId can not be empty');
            return;
        }
        if (this.inputName === '') {
            alert('InputName can not be empty');
            return;
        }
        if (this.inputLocation === '') {
            alert('InputLocation can not be empty');
            return;
        }
        if(this.inputKind === ''){
            alert('InputKind can not be empty');
            return;
        }
        name = name.trim();
        if (!name) { return; }

        this.statusServices.addDevices(this.inputId, this.inputName, this.inputLocation, this.inputKind).subscribe(
            res => {
                console.log('add successful');
                alert('Add Successfully!');
            },
            err =>{
                console.log(err);
                alert('Add failed!');
            }
        );
        this.inputId = '';
        this.inputName = '';
        this.inputLocation = '';
        this.inputKind = '';
            // .subscribe(devices => {
            //     this.devicesArr.push(devices);
            // });
    }

}
