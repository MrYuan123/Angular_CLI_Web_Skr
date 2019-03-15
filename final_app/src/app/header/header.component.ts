import { Component, OnInit, Input, } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() searchbox = '';
    name = 'hello, this is just a test word.'
    value = '';
    nowuser: string;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.nowuser = localStorage.getItem('username');
// let arr:Array <string>=['123','456','789'];
    }
    onEnter(value: string) {
        let arr: Array <string> = ['456', '123', '789'];
        this.value = value;

        if (arr.includes(this.value) === true) {
            this.router.navigate(['../status_table'],{relativeTo:this.route});
        } else {
            alert('can not find this device');
        }
    }

    outOP(): void {
        localStorage.clear();
    }
}