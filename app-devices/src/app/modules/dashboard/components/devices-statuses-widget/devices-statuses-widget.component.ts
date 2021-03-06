import { Component, OnInit } from '@angular/core';
import { deviceStatusToColors } from 'src/app/shared/const/device-status-to-colors.const';
import { DeviceStatusModel } from 'src/app/shared/models/device-status.model';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';

@Component({
  selector: 'app-devices-statuses-widget',
  templateUrl: './devices-statuses-widget.component.html',
  styleUrls: ['./devices-statuses-widget.component.scss']  
})
export class DevicesStatusesWidgetComponent implements OnInit {
  options: any;

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {   
    this.devicesService
      .getDevicesStatuses()
      .subscribe(devicesStatuses => this.initPie(devicesStatuses)); 
  }

  initPie(devicesStatuses: DeviceStatusModel[]) {
    const data: any = [];

    for(var i = 0; i < devicesStatuses.length; i++){
      let dataItem = {
        value: devicesStatuses[i].count,
        name: devicesStatuses[i].status,
        itemStyle: {
          color: deviceStatusToColors.get(devicesStatuses[i].status)
        }
      }
      data.push(dataItem);
    }
    console.log(data);
    this.options = {
      title: {               
        left: 'center'
      },
      tooltip: {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          left: 'left',
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data:  data,
          emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
