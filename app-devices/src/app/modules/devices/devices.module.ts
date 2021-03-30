import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { DevicesComponent } from './components/devices/devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { SearchDeviceComponent } from './components/search-device/search-device.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';

const materialModules = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [DevicesComponent, DeviceListComponent, SearchDeviceComponent, DeviceDetailsComponent, DeviceItemComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    FlexLayoutModule,
    ...materialModules,
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
