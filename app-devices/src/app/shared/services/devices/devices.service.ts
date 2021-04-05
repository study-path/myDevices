import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DeviceStatusEnum } from '../../enum/device-status.enum';
import { DeviceDetailsModel } from '../../models/device-details.model';
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
      status: DeviceStatusEnum.Online
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
      status: DeviceStatusEnum.Online
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
      status: DeviceStatusEnum.Online
    },
    {
      id: 9,
      name: "Device 9",
      status: DeviceStatusEnum.EE
    },
    {
      id: 10,
      name: "Device 10",
      status: DeviceStatusEnum.TT
    }
  ];
  
  getDevices(status?: DeviceStatusEnum): Observable<DeviceModel[]> {   
    if(status != null){
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
          status: DeviceStatusEnum.Online
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
          status: DeviceStatusEnum.Online
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
          status: DeviceStatusEnum.Online
        },
        {
          id: 5,      
          name: "Device 5555555555555555 Device 5",
          status: DeviceStatusEnum.Online
        },
        {
          id: 9,
          name: "Device 9",
          status: DeviceStatusEnum.EE
        },
        {
          id: 10,
          name: "Device 10",
          status: DeviceStatusEnum.TT
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
    let eeCount = 0;
    let ttCount = 0;
       
    for(var i = 0; i < this.devices.length; i++){
        if(this.devices[i].status == DeviceStatusEnum.Online){
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
        else if(this.devices[i].status == DeviceStatusEnum.EE){
          eeCount++;
        }
        else  if(this.devices[i].status == DeviceStatusEnum.TT){
          ttCount++;
        }            
    }

    let deviceAvailable: DeviceStatusModel = {
      count: availableCount,
      status: DeviceStatusEnum["Online"]
    };

    let deviceOffline: DeviceStatusModel = {
      count: offlineCount,
      status: DeviceStatusEnum.Offline
    };

    let deviceMaintanace: DeviceStatusModel = {
      count: maintenanceCount,
      status: DeviceStatusEnum.Maintenance
    };

    let deviceRestarting: DeviceStatusModel = {
      count: restartingCount,
      status: DeviceStatusEnum.Restarting
    };

    let deviceEE: DeviceStatusModel = {
      count: eeCount,
      status: DeviceStatusEnum.EE
    };

    let deviceTT: DeviceStatusModel = {
      count: ttCount,
      status: DeviceStatusEnum.TT
    };
   
    devicesStatuses.push(deviceAvailable);
    devicesStatuses.push(deviceOffline);
    devicesStatuses.push(deviceMaintanace);
    devicesStatuses.push(deviceRestarting);
    devicesStatuses.push(deviceEE);
    devicesStatuses.push(deviceTT);

    return of(devicesStatuses);      
  } 
}