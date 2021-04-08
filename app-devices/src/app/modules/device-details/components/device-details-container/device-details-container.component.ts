import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceModel } from 'src/app/shared/models/device.model';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';

import { CompDetailsComponent } from '../details-components/comp-details/comp-details.component';
import { DeviceDetailsComponent } from '../details-components/device-details/device-details.component';
import { DeviceDetailsDirective } from './../../directives/device-details.directive';
import { MobileDetailsComponent } from './../details-components/mobile-details/mobile-details.component';

@Component({
  selector: 'app-device-details-container',
  templateUrl: './device-details-container.component.html',
  styleUrls: ['./device-details-container.component.scss']
})
export class DeviceDetailsContainerComponent implements OnInit {
  @ViewChild(DeviceDetailsDirective, {static: true}) qwe!: DeviceDetailsDirective;
  relatedDevices!: DeviceModel[];
  id!: string;

  constructor(private devicesService: DevicesService,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {     
      this.id = parameters.id;
      this.initRelatedDevices(parameters.id);
    }); 
  }

  initRelatedDevices(deviceId: number){
    this.devicesService
      .getRelatedDevices(deviceId)
      .subscribe((relatedDevices:DeviceModel[]) => 
      {
        this.relatedDevices = relatedDevices;

        const viewContainerRef = this.qwe.viewContainerRef;
        viewContainerRef.clear();

        let component;
        if (this.id == '1') {
          component = DeviceDetailsComponent;
        }
        else if (this.id == '2') {
          component = MobileDetailsComponent;
        }
        else {
          component = CompDetailsComponent;
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        const componentRef = viewContainerRef.createComponent(componentFactory);
      });
  }

}
