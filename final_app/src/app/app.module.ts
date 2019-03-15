import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { DeviceTableComponent } from './device-table/device-table.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatusVisualizationComponent } from './status-visualization/status-visualization.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { LocationVisualizationComponent } from './location-visualization/location-visualization.component';
import { AgmCoreModule } from '@agm/core';
import { BaiduMapModule} from 'angular2-baidu-map';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderComponent,
    FooterComponent,
    AddDeviceComponent,
    ChangePassComponent,
    StatusTableComponent,
    DeviceTableComponent,
    LoginSectionComponent,
    RegisterSectionComponent,
    HomepageComponent,
    StatusVisualizationComponent,
    LocationVisualizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDay8dDQw6qmsJ2zMGmVZYHhA0xaQ-au_k'
    }),
      BaiduMapModule.forRoot({ak: 'gZLbOobyjhzA3CWykqeDsVZqvzpGP82m'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
