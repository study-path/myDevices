import { Component, Input, OnInit } from '@angular/core';
import { DeviceModel } from 'src/app/modules/models/device-model';

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

}
