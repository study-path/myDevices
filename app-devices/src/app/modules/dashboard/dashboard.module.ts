import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule } from 'ngx-echarts';

import { DeviceListModule } from '../device-list/device-list.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesStatusesWidgetComponent } from './components/devices-statuses-widget/devices-statuses-widget.component';
import { DevicesWidgetComponent } from './components/devices-widget/devices-widget.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';

@NgModule({
  declarations: [DashboardComponent, DevicesWidgetComponent, DevicesStatusesWidgetComponent, WidgetContainerComponent],
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
