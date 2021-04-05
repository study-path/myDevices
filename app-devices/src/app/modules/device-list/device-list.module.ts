import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { DeviceItemComponent } from './components/device-item/device-item.component';
import { DeviceListComponent } from './components/device-list/device-list.component';

const materialModules = [  
  MatIconModule, 
  MatCardModule
]

@NgModule({
  declarations: [
    DeviceListComponent, 
    DeviceItemComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    DeviceListComponent, 
    DeviceItemComponent
  ]
})
export class DeviceListModule { }
