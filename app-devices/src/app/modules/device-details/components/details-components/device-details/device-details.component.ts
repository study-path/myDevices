import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetailsModel } from '@models/device-details.model';
import { DevicesService } from '@services/devices/devices.service';
import { delay } from 'rxjs/operators';

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
    this.activatedRoute.params.subscribe(parameters => {
      this.deviceId = parameters.id;
      this.initDeviceDetails(parameters.id);      
    });    
  }

  initDeviceDetails(id: number){
    this.devicesService
      .getDeviceDetails(id)
      .pipe(delay(2000))
      .subscribe((device: DeviceDetailsModel) => this.device = device);
  }

}
