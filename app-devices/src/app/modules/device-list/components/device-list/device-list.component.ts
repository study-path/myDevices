import { Component, Input, OnInit } from '@angular/core';
import { DeviceModel } from '@models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  @Input() devices!: DeviceModel[];

  constructor() { }

  ngOnInit() { }

}
