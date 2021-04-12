import { Component, OnInit } from '@angular/core';
import { DeviceModel } from '@models/device.model';
import { DevicesService } from '@services/devices/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices!: DeviceModel[];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devicesService
      .getDevices()
      .subscribe((devices: DeviceModel[]) => this.devices = devices);
  }

  newDevice():void{

  }
}
