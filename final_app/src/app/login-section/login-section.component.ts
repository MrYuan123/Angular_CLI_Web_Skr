import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Status} from '../status';
import { StatusService } from '../status.service';
import { Globals } from '../global';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss'], providers: [ Globals ]
})
export class LoginSectionComponent implements OnInit {
    @Input() inputusername = '';
    @Input() inputpassword = '';
    next_url = '/index';

    constructor(private globals: Globals, private route: ActivatedRoute, private  router: Router, private statusService: StatusService) {
    }

    accountlist: User[];

    ngOnInit() {
        this.getAccount();
    }

    getAccount(): void {
    }

    checklogin(): void {
        const useraccount: User = new User();
        // useraccount.username = 'abc';
        // useraccount.password = '123';
        this.statusService.getAccounts().subscribe(accounts => this.accountlist = accounts);
        for (let m of this.accountlist){
          if (m.username === this.inputusername && m.password === this.inputpassword){
            localStorage.setItem('_id', m._id);
            localStorage.setItem('username', m.username);
            localStorage.setItem('password', m.password);
            localStorage.setItem('email', m.email);
            localStorage.setItem('pictureUrl', 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
            this.router.navigate(['../index'], {relativeTo: this.route});
            return;
      }
    }
        alert('wrong');
        // if (this.inputusername === useraccount.username && this.inputpassword === useraccount.password) {
        //     alert('correct');
        //     this.router.navigate(['../index'], {relativeTo: this.route});
        // } else {
        //     alert('wrong');
        // }
    }
}

//   checklogin(): void {
//     for(let m of this.globals.userlist){
//       if (m.username === this.inputusername && m.password === this.inputpassword){
//         alert('ok, correct' + m.username);
//         return;
//       }
//     }
//     alert('fails');
//       // if (this.inputusername === this.globals.accountname && this.inputpassword === this.globals.password) {
//       //   alert('correct');
//       // } else {
//       //   alert('wrong');
//       // }
//     // const useraccount: User = new User();
//     // useraccount.username = 'abc';
//     // useraccount.password = '123';
//     // if (this.inputusername === useraccount.username && this.inputpassword === useraccount.password) {
//     //   alert('correct');
//     // } else {
//     //   alert('wrong');
//     // }
//   }
// }
