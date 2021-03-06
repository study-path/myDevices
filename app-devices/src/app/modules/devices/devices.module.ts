import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { DeviceListModule } from '../device-list/device-list.module';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SearchDeviceComponent } from './components/search-device/search-device.component';
import { DevicesRoutingModule } from './devices-routing.module';

const materialModules = [
  MatFormFieldModule,  
  MatButtonModule,
  MatInputModule, 
  MatIconModule
]

@NgModule({
  declarations: [DevicesComponent, SearchDeviceComponent, AddDeviceComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    FlexLayoutModule,
    ...materialModules,
    FormsModule ,
    DeviceListModule
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
