import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  url: string;
  nowuser: string;
  constructor() {
    this.nowuser = localStorage.getItem('username');
    if (localStorage.getItem('pictureUrl')) {
      this.url = localStorage.getItem('pictureUrl');
    } else {
    }
  }

  ngOnInit() {
// this.url = 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        localStorage.setItem('pictureUrl', event.target.result);
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
