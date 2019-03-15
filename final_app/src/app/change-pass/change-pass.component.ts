import { Component, OnInit, Input } from '@angular/core';
import { StatusService} from '../status.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  @Input() Password1 = '';
  @Input() Password2 = '';
  nowemail: string;
  nowusername: string;
  constructor(private  statusServices: StatusService) {
    this.nowusername = localStorage.getItem('username');
    this.nowemail = localStorage.getItem('email');
  }

  ngOnInit() {
  }
  checkpwdmatch(): void {
    if (this.Password1 === this.Password2) {
      this.statusServices.changePassword(this.Password1).subscribe(
          res => {
              console.log('registration successful');
          },
          err =>{
              console.log(err);
          }
      );
      alert('Change successfully!');
    } else {
      alert('make sure password correct!');
    }
  }
}
