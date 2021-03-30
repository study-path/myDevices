import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DevicesComponent } from './components/devices/devices.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    children: [
      {
        path: "devices/:{id}/details",
        component: DeviceDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
