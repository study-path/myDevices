import { Component, OnInit } from '@angular/core';
import { DeviceStatusEnum } from 'src/app/modules/models/device-status-enum';

import { DeviceModel } from './../../../models/device-model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices: DeviceModel[] = [
    {
      id: 1,
      name: "Device 1",
      status: DeviceStatusEnum.Available
    },
    {
      id: 2,
      name: "Device 2",
      status: DeviceStatusEnum.Restarting
    },
    {
      id: 3,
      name: "Device 3",
      status: DeviceStatusEnum.Available
    },
    {
      id: 4,
      name: "Device 4",
      status: DeviceStatusEnum.Available
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
