import { Component, OnInit } from '@angular/core';
import { DeviceModel } from '@models/device.model';
import { DevicesService } from '@services/devices/devices.service';
import { DeviceStatusEnum } from 'src/app/shared/models/device-status.enum';

@Component({
  selector: 'app-problem-devices-widget',
  templateUrl: './problem-devices-widget.component.html',
  styleUrls: ['./problem-devices-widget.component.scss']
})
export class ProblemDevicesWidgetComponent implements OnInit {
  devices!: DeviceModel[];
  
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devicesService
    .getDevices(DeviceStatusEnum.Offline)
    .subscribe((devices: DeviceModel[]) => this.devices = devices);
  }

}
