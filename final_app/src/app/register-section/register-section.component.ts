import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-register-section',
  templateUrl: './register-section.component.html',
  styleUrls: ['./register-section.component.scss']
})
export class RegisterSectionComponent implements OnInit {
  @Input() inputusername;
  @Input() inputemail;
  @Input() inputpassword;
  @Input() inputrepassword;
  constructor(private statusService: StatusService) { }

  ngOnInit() {
  }

  checkemail(str): void {
    const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if ( re.test(str)) {
      alert('Correct E-mail address');
    } else {
      alert('Wrong E-mail address');
    }
  }

  registersave(): void {
    // const useraccount: User = new User();
  // || this.inputpassword === undefined || this.inputrepassword === undefined
      if (this.inputusername === undefined || this.inputemail === undefined) {
      alert('please confirm your input is complete!');
      return;
    } else {
      if (this.inputpassword === this.inputrepassword) {
        this.statusService.addAccount(this.inputusername, this.inputpassword, this.inputemail).subscribe(
            res => {
              console.log('registration successful');
            },
            err =>{
              console.log(err);
            }
        );
        alert('Successful!');
        this.inputusername = '';
        this.inputemail = '';
        this.inputpassword = '';
        this.inputrepassword = '';
      } else {
        alert('Please confirm your password & repassword!');
      }
    }
  }

}
