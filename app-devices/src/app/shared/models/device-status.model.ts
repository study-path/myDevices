import { DeviceStatusEnum } from '../enum/device-status.enum';

export interface DeviceStatusModel{
  count: number;
  status: DeviceStatusEnum;
}