import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesService } from '@services/devices/devices.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  device = {
    id: '',
    name: '',
    status: '',
    type: ''
  }

  submitted = false;

  constructor(private devicesService: DevicesService,
             private router: Router) { }

  ngOnInit(): void {
  }

  saveDevice(){
    const data = {
      name: this.device.name,
      status: this.device.status,
      type: this.device.type
    };

    this.devicesService.createDevice(data)
      .subscribe(
        deviceId => {
          console.log(deviceId);
          this.submitted = true;
          this.router.navigate([`/devices/${deviceId}/details`]);
        },
        error => {
          console.log(error);
        });

  }
  
}
