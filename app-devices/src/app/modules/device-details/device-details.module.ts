import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { DeviceListModule } from '../device-list/device-list.module';
import { DeviceDetailsContainerComponent } from './components/device-details-container/device-details-container.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceDetailsRoutingModule } from './device-details-routing.module';

@NgModule({
  declarations: [DeviceDetailsComponent, DeviceDetailsContainerComponent],
  imports: [
    CommonModule,
    DeviceDetailsRoutingModule,
    DeviceListModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DeviceDetailsModule { }
