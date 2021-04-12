import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

import { DeviceStatusEnum } from '../../enum/device-status.enum';
import { DeviceDetailsModel } from '../../models/device-details.model';
import { DeviceStatusModel } from '../../models/device-status.model';
import { DeviceModel } from '../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }  
    
  getDevices(status?: DeviceStatusEnum): Observable<DeviceModel[]> {   
    return this.http.get<DeviceModel[]>(`${environment.myDeviceApiUrl}/api/devices`);
  }

  getDeviceDetails(id: number):Observable<DeviceDetailsModel>{   
    return this.http.get<DeviceDetailsModel>(`${environment.myDeviceApiUrl}/api/devices/${id}/details`);
  }

  getRelatedDevices(id: number){    
    return this.http.get<DeviceModel[]>(`${environment.myDeviceApiUrl}/api/devices/${id}/relatedDevices`);
  }

  getDevicesStatuses(): Observable<DeviceStatusModel[]>{    
    return this.http.get<DeviceStatusModel[]>(`${environment.myDeviceApiUrl}/api/devices/statuses`);
  } 

  createDevice(data:any): Observable<any> {
    return this.http.post(`${environment.myDeviceApiUrl}/api/devices`, data);
  }
}