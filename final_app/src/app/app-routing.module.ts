import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddDeviceComponent} from './add-device/add-device.component';
import {ChangePassComponent} from './change-pass/change-pass.component';
import {StatusTableComponent} from './status-table/status-table.component';
import {DeviceTableComponent} from './device-table/device-table.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RegisterSectionComponent} from './register-section/register-section.component';
import {LoginSectionComponent} from './login-section/login-section.component';
import {StatusVisualizationComponent} from './status-visualization/status-visualization.component';
import { LocationVisualizationComponent} from './location-visualization/location-visualization.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'index', component: HomepageComponent},
  { path: 'add', component: AddDeviceComponent},
  { path: 'change', component: ChangePassComponent},
  { path: 'status_table', component: StatusTableComponent},
  { path: 'device_table', component: DeviceTableComponent},
  { path: 'login', component: LoginSectionComponent},
  { path: 'register', component: RegisterSectionComponent},
  { path: 'status_view', component: StatusVisualizationComponent},
  { path: 'location_visualization', component: LocationVisualizationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


