import { Component, Input, OnInit } from '@angular/core';
import { DeviceModel } from '@models/device.model';
import { deviceStatusToColors } from 'src/app/shared/const/device-status-to-colors.const';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {

  @Input()
  device!: DeviceModel;
  
  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundStyle(): any {
    return {
      "background-color": deviceStatusToColors.get(this.device.status),
    };
  }
}
