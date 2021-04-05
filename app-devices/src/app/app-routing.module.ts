import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    pathMatch: 'full',
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (mod) => mod.DashboardModule
      ),
  },
  {
    path: "devices",
    pathMatch: 'full',
    loadChildren: () =>
      import("./modules/devices/devices.module").then(
        (mod) => mod.DevicesModule
      ),
  },
  {
    path: "devices/:id/details",
    loadChildren: () =>
      import("./modules/device-details/device-details.module").then(
        (mod) => mod.DeviceDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
