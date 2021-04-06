import { Component, Input, OnInit } from '@angular/core';
import { DeviceModel } from '@models/device.model';
import { DevicesService } from '@services/devices/devices.service';
import { DeviceStatusEnum } from 'src/app/shared/enum/device-status.enum';

@Component({
  selector: 'app-devices-widget',
  templateUrl: './devices-widget.component.html',
  styleUrls: ['./devices-widget.component.scss']
})
export class DevicesWidgetComponent implements OnInit {
  devices!: DeviceModel[];

  @Input() title!: string;
  @Input() status!: DeviceStatusEnum;
  
  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devicesService
      .getDevices(this.status)
      .subscribe((devices: DeviceModel[]) => this.devices = devices);
  }

}
