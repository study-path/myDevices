import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetailsModel } from '@models/device-details.model';
import { DevicesService } from '@services/devices/devices.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  deviceId!: number;
  device!: DeviceDetailsModel;
 
  constructor(private devicesService: DevicesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const deviceId = this.activatedRoute.snapshot.params.id;
    this.deviceId = deviceId;
    this.initDeviceDetails(deviceId);

    this.activatedRoute.params.subscribe(parameters => {
      this.deviceId = parameters.id;
      this.initDeviceDetails(parameters.id);      
    });    
  }

  initDeviceDetails(id: number){
    this.devicesService
    .getDeviceDetails(id)
    .subscribe((device: DeviceDetailsModel) => this.device = device);
  }

}
