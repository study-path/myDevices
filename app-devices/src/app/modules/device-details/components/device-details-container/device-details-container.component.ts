import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceModel } from 'src/app/shared/models/device.model';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';

@Component({
  selector: 'app-device-details-container',
  templateUrl: './device-details-container.component.html',
  styleUrls: ['./device-details-container.component.scss']
})
export class DeviceDetailsContainerComponent implements OnInit {
  relatedDevices!: DeviceModel[];  

  constructor( private devicesService: DevicesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const deviceId = this.activatedRoute.snapshot.params.id;
    this.initRelatedDevices(deviceId);

    this.activatedRoute.params.subscribe(parameters => {     
      this.initRelatedDevices(parameters.id);      
    }); 
  }

  initRelatedDevices(deviceId: number){
    this.devicesService
      .getRelatedDevices(deviceId)
      .subscribe((relatedDevices:DeviceModel[]) => this.relatedDevices = relatedDevices)
  }

}
