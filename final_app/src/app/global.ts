import { Injectable } from '@angular/core';
import { User } from './user';
import { Status} from './status';
import { StatusService } from './status.service';


@Injectable()
export class Globals {
    pictureUrl: string;
    userlist: User[];
    nowuser: User;
    accountname = '123';
    password = '123';
    constructor(private statusService: StatusService) {
        this.statusService.getAccounts().subscribe(users => this.userlist = users);
    }
}
