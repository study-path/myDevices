import { Component, OnInit } from '@angular/core';
import { DeviceStatusEnum } from 'src/app/shared/enum/device-status.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  offLineStatus: DeviceStatusEnum = DeviceStatusEnum.Offline;
  restartingStatus: DeviceStatusEnum = DeviceStatusEnum.Restarting;
  maintenanceStatus: DeviceStatusEnum = DeviceStatusEnum.Maintenance;

  constructor() { }

  ngOnInit(): void {
  }
}
