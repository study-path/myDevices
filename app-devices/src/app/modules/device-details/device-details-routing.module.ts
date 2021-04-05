import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceDetailsContainerComponent } from './components/device-details-container/device-details-container.component';


const routes: Routes = [
  {
    path: "",
    component: DeviceDetailsContainerComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceDetailsRoutingModule { }
