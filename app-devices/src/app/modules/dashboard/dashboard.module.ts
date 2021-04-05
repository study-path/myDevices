import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule } from 'ngx-echarts';

import { DeviceListModule } from '../device-list/device-list.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesStatusesWidgetComponent } from './components/devices-statuses-widget/devices-statuses-widget.component';
import { ProblemDevicesWidgetComponent } from './components/problem-devices-widget/problem-devices-widget.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, ProblemDevicesWidgetComponent, DevicesStatusesWidgetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    DeviceListModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
