import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DevicesComponent } from './components/devices/devices.component';

const routes: Routes = [
  {
    path: "",
    component: DevicesComponent
  },
  {
    path: 'add',
    component: AddDeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
