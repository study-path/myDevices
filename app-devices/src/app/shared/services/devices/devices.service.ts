import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DeviceDetailsModel } from '../../models/device-details.model';
import { DeviceStatusEnum } from '../../models/device-status.enum';
import { DeviceStatusModel } from '../../models/device-status.model';
import { DeviceModel } from '../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  devices = [
    {
      id: 1,      
      name: "Device 1 Device 1 Device 1 Device 1 Device 1Device 1Device 1Device 1Device 1Device 1Device 1",
      status: DeviceStatusEnum.Available
    },
    {
      id: 2,
      name: "Device 222222222222222222 ",
      status: DeviceStatusEnum.Restarting
    },
    {
      id: 3,
      name: "Device 3",
      status: DeviceStatusEnum.Offline
    },
    {
      id: 4,
      name: "Device 4",
      status: DeviceStatusEnum.Maintenance
    },
    {
      id: 5,      
      name: "Device 5555555555555555 Device 5",
      status: DeviceStatusEnum.Available
    },
    {
      id: 6,
      name: "Device 666666666666 ",
      status: DeviceStatusEnum.Restarting
    },
    {
      id: 7,
      name: "Device 7",
      status: DeviceStatusEnum.Offline
    },
    {
      id: 8,
      name: "Device 8",
      status: DeviceStatusEnum.Available
    }
  ];
  
  getDevices(status?: DeviceStatusEnum): Observable<DeviceModel[]> {
    if(status !== null){
      return of(this.devices.filter(device => device.status == status));
    }
    else{
      return of(this.devices);
    }
  }

  getDeviceDetails(id: number):Observable<DeviceDetailsModel>{
    return of(
      {
        id: id,
        name: "Device " + id,
        status: DeviceStatusEnum.Restarting,
        temperature: 10
      }
    )
  }

  getRelatedDevices(id: number){
    if(id == 1){
      return of([
        {
          id: 1,      
          name: "Device 1 Device 1 Device 1 Device 1 Device 1Device 1Device 1Device 1Device 1Device 1Device 1",
          status: DeviceStatusEnum.Available
        },
        {
          id: 2,
          name: "Device 222222222222222222 ",
          status: DeviceStatusEnum.Restarting
        },      
        {
          id: 7,
          name: "Device 7",
          status: DeviceStatusEnum.Offline
        },
        {
          id: 8,
          name: "Device 8",
          status: DeviceStatusEnum.Available
        }
      ]);
    }
    else{
      return of([
        {
          id: 3,
          name: "Device 3",
          status: DeviceStatusEnum.Offline
        },
        {
          id: 4,
          name: "Device 4",
          status: DeviceStatusEnum.Available
        },
        {
          id: 5,      
          name: "Device 5555555555555555 Device 5",
          status: DeviceStatusEnum.Available
        },
      ]);
    }    
  }

  getDevicesStatuses(): Observable<DeviceStatusModel[]>{
    const devicesStatuses: DeviceStatusModel[] = [];
    let availableCount = 0;
    let offlineCount= 0;
    let maintenanceCount = 0;
    let restartingCount = 0;
       
    for(var i = 0; i < this.devices.length; i++){
        if(this.devices[i].status == DeviceStatusEnum.Available){
          availableCount++;
        }
        else if(this.devices[i].status == DeviceStatusEnum.Offline){
          offlineCount++;
        }
        else if(this.devices[i].status == DeviceStatusEnum.Restarting){
          restartingCount++;
        }
        else  if(this.devices[i].status == DeviceStatusEnum.Maintenance){
          maintenanceCount++;
        }       
    }

    let deviceAvailable: DeviceStatusModel = {
      count: availableCount,
      status: DeviceStatusEnum["Available"]
    };

    let deviceOffline: DeviceStatusModel = {
      count: offlineCount,
      status: DeviceStatusEnum.Offline
    };

    let deviceMaintanaceCount: DeviceStatusModel = {
      count: maintenanceCount,
      status: DeviceStatusEnum.Maintenance
    };

    let deviceRestartingCount: DeviceStatusModel = {
      count: restartingCount,
      status: DeviceStatusEnum.Restarting
    };
   
    devicesStatuses.push(deviceAvailable);
    devicesStatuses.push(deviceOffline);
    devicesStatuses.push(deviceMaintanaceCount);
    devicesStatuses.push(deviceRestartingCount);

    return of(devicesStatuses)
      .pipe(delay(5000));      
  } 
}