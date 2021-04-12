import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { DeviceListModule } from '../device-list/device-list.module';
import { CompDetailsComponent } from './components/details-components/comp-details/comp-details.component';
import { DeviceDetailsComponent } from './components/details-components/device-details/device-details.component';
import { MobileDetailsComponent } from './components/details-components/mobile-details/mobile-details.component';
import { DeviceDetailsContainerComponent } from './components/device-details-container/device-details-container.component';
import { DeviceDetailsRoutingModule } from './device-details-routing.module';
import { DeviceDetailsDirective } from './directives/device-details.directive';


@NgModule({
  declarations: [DeviceDetailsContainerComponent, DeviceDetailsComponent, MobileDetailsComponent, DeviceDetailsDirective, CompDetailsComponent],
  imports: [
    CommonModule,
    DeviceDetailsRoutingModule,
    DeviceListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule
  ]
})
export class DeviceDetailsModule { }
