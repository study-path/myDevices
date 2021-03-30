import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SearchDeviceComponent } from './components/search-device/search-device.component';
import { DevicesRoutingModule } from './devices-routing.module';

const materialModules = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule
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
